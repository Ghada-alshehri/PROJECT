import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importing Firebase config and services
import { db, auth, provider } from "../firebase"; // db = Firestore, auth = Authentication, provider = Google OAuth provider
import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore"; // Firestore functions
import { signInWithPopup } from "firebase/auth"; // Firebase auth function to trigger Google popup

function Signup() {
  // Local state for input fields and error message
  const [name, setName] = useState("");      // State for full name input
  const [email, setEmail] = useState("");    // State for email input
  const [password, setPassword] = useState("");  // State for password input
  const [error, setError] = useState("");    // State for error messages
  const navigate = useNavigate();            // To navigate after successful signup

  /*
    useState explanation:
     - Tracks the values typed by the user in input fields
     - Stores and displays error messages (e.g., empty input, duplicate email, etc.)
  */

  // ----------------------- Manual signup function -----------------------
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form refresh

    // Validate inputs: all fields must be filled
    if (!name || !email || !password) {
      setError("Please fill in all fields!");
      return;
    }

    try {
      const userRef = doc(db, "users", email);         // Reference to a user document in Firestore
      const userSnap = await getDoc(userRef);          // Try to fetch the user from Firestore

      if (userSnap.exists()) {
        setError("This email is already in use.");     // Prevent duplicate registration
        return;
      }

      // Store new user data in Firestore (only email used as document ID)
      await setDoc(userRef, {
        name,
        email,
        password, // ❗ Do NOT store passwords like this in production. Should be hashed.
        university: "King Abdulaziz University",
        photoURL: "https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg",
        method: "manual", // Tag that this account was created manually
      });

      // Save user session to localStorage
      localStorage.setItem("manualEmail", email);

      setError("");              // Clear any old error
      navigate("/login");       // Go to login page after signup
    } catch (error) {
      console.error("Error adding user:", error);  // Debugging: log error in browser console
      setError("Something went wrong. Please try again."); // Show error to user
    }
  };

  // -------------------- Google OAuth signup function (API) --------------------
  const handleGoogleSignup = async () => {
    try {
      // 1. Trigger Google sign-in popup using Firebase Authentication
      const result = await signInWithPopup(auth, provider);
      const user = result.user; // 2. Get user info returned by Google (name, email, etc.)

      // 3. Create reference to Firestore document with user's email
      const userRef = doc(db, "users", user.email);
      const docSnap = await getDoc(userRef);

      // 4. If user not in database, save user info in Firestore
      if (!docSnap.exists()) {
        await setDoc(userRef, {
          name: user.displayName,             // User's name from Google
          email: user.email,                  // User's email from Google
          university: "King Abdulaziz University",
          photoURL: user.photoURL || "https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg",
          method: "google",                   // Tag that this account was created using Google
        });
      }

      // 5. Redirect user to profile page after successful signup
      navigate("/profile");
    } catch (error) {
      console.error("Google sign-up error:", error); // Debug error if signup fails
      setError("Google Sign-up failed.");            // Show error to user
    }
  };

  return (
    <section id="signup" className="section active">
      <div className="login-container">
        <h2>Create an Account</h2>
        <p>Join Volunteer Hub to find opportunities</p>

        {/* Divider between manual and Google signup */}
        <div className="divider">
          <span>OR</span>
        </div>

        {/* Google signup button */}
        <button onClick={handleGoogleSignup} className="google-signup-btn">
          Sign up with Google
        </button>

        {/* Manual signup form */}
        <form className="email-login-form" onSubmit={handleSubmit}>
          {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="email-login-btn">
            Sign Up
          </button>
        </form>

        {/* Link to login page if user already has an account */}
        <div className="signup-link">
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;
