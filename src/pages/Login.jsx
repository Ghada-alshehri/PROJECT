import { GoogleLogin } from '@react-oauth/google'; // Google OAuth component
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Library used to decode the JWT returned by Google
import { db } from "../firebase"; // Firestore database
import { doc, getDoc, setDoc } from "firebase/firestore"; // Firestore functions

// ------------------- Login Component -------------------
function Login() {
  const [email, setEmail] = useState(""); // Email input state
  const [password, setPassword] = useState(""); // Password input state
  const [error, setError] = useState(""); // Error message for validation
  const navigate = useNavigate(); // Hook to redirect the user

  /*
    useState is used to:
    - track what the user types in the form
    - show any error messages if login fails
  */

  // ------------------- Manual Login Function -------------------
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    // Basic validation to ensure both fields are filled
    if (!email || !password) {
      setError("Please fill in both email and password!");
      return;
    }

    try {
      // Try to find the user in Firestore using email as document ID
      const userRef = doc(db, "users", email);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        setError("No user found with this email.");
        return;
      }

      const userData = docSnap.data();

      // If the user registered manually, check if password matches
      if (userData.method === "manual" && userData.password === password) {
        // Save user session in local storage
        localStorage.setItem("manualEmail", userData.email);
        localStorage.setItem("googleName", userData.name); // Used for display
        localStorage.setItem("googleEmail", userData.email);

        // Redirect to profile page after login
        window.location.href = "/profile";
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  // ------------------- Google Login Function (OAuth) -------------------
  const handleGoogleLogin = async (credentialResponse) => {
    try {
      // Step 1: Save the Google credential (JWT token) in local storage
      localStorage.setItem("google_token", credentialResponse.credential);

      // Step 2: Decode the token to extract user information (email, name)
      const decoded = jwtDecode(credentialResponse.credential);
      localStorage.setItem("googleName", decoded.name);
      localStorage.setItem("googleEmail", decoded.email);

      // Step 3: Check if the user already exists in Firestore
      const userRef = doc(db, "users", decoded.email);
      const docSnap = await getDoc(userRef);

      // Step 4: If not, save the user info to Firestore
      if (!docSnap.exists()) {
        await setDoc(userRef, {
          name: decoded.name,
          email: decoded.email,
          method: "google", // We store that the user signed up using Google
          university: "King Abdulaziz University",
          photoURL:
            "https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg",
        });
      }

      // Step 5: Redirect to the profile page
      window.location.href = "/profile";
    } catch (err) {
      console.error("Google Login Error:", err); // Log error to console for debugging
    }
  };

  // ------------------- Render the Login UI -------------------
  return (
    <section id="login" className="section active">
      <div className="login-container">
        <h2>Welcome to Volunteer Hub</h2>
        <p>Sign in to find volunteer opportunities</p>

        {/* Google login button using @react-oauth/google */}
        <div className="google-login-btn">
          <GoogleLogin
            onSuccess={handleGoogleLogin} // Google sends a JWT token here
            onError={() => console.log("Login Failed")} // Handle Google error
          />
        </div>

        <div className="divider"><span>OR</span></div>

        {/* Manual email/password login form */}
        <form className="email-login-form" onSubmit={handleSubmit}>
          {error && (
            <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
          )}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
          </div>
          <button type="submit" className="email-login-btn">
            Sign In
          </button>
        </form>

        {/* Redirect to signup if user doesn't have an account */}
        <div className="signup-link">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </div>
    </section>
  );
}

export default Login;
