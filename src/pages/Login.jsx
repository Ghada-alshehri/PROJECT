import { GoogleLogin } from '@react-oauth/google';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
  // Login component that allows users to sign in manually or using Google
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

/* useState:
 use local state variables:
- email → to store the user’s typed email
- password → to store the user’s typed password
- error → to show error messages when login fails
We update these states when the user types into the form or when we want to display feedback.
Props:
we do not receive props directly, but it uses child components like: 
<GoogleLogin /> → we pass it an onSuccess function (handleGoogleLogin)
<form> and its elements → they pass values up through onChange events to update local state
*/
  
  // Handles manual login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
        // Basic validation for input fields
    if (!email || !password) {
      setError("Please fill in both email and password!");
      return;
    }

    try {
            // Get user data from Firestore using email as document ID
      const userRef = doc(db, "users", email);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        setError("No user found with this email.");
        return;
      }

      const userData = docSnap.data();
      // Check credentials match for manual login
      if (userData.method === "manual" && userData.password === password) {
        localStorage.setItem("manualEmail", userData.email);
        localStorage.setItem("googleName", userData.name);
        localStorage.setItem("googleEmail", userData.email);

        // Redirect to profile page
        window.location.href = "/profile";
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };
    // Handles Google OAuth login and creates user record in Firestore if not exists

  const handleGoogleLogin = async (credentialResponse) => {
    try {      // Save JWT token and decode user info
      localStorage.setItem("google_token", credentialResponse.credential);
      const decoded = jwtDecode(credentialResponse.credential);
      localStorage.setItem("googleName", decoded.name);
      localStorage.setItem("googleEmail", decoded.email);

      const userRef = doc(db, "users", decoded.email);
      const docSnap = await getDoc(userRef);
      // If user doesn't exist, create new Firestore document
      if (!docSnap.exists()) {
        await setDoc(userRef, {
          name: decoded.name,
          email: decoded.email,
          method: "google",
          university: "King Abdulaziz University",
          photoURL:
            "https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg",
        });
      }

      // Redirect to profile after login
      window.location.href = "/profile";
    } catch (err) {
      console.error("Google Login Error:", err);
    }
  };
  // Render login form with Google login button and manual email/password form
  return (
    <section id="login" className="section active">
      <div className="login-container">
        <h2>Welcome to Volunteer Hub</h2>
        <p>Sign in to find volunteer opportunities</p>

        <div className="google-login-btn">
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => console.log("Login Failed")}
          />
        </div>

        <div className="divider"><span>OR</span></div>

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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="email-login-btn">
            Sign In
          </button>
        </form>

        <div className="signup-link">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </div>
    </section>
  );
}

export default Login;
