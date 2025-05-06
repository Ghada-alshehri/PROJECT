import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

// Navbar component
function Navbar() {
  // Check if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Store user's name and profile picture
  const [userName, setUserName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const location = useLocation(); // to detect route changes
  const navigate = useNavigate(); // to programmatically navigate

  // This runs every time the route (location) changes
  useEffect(() => {
    // Try to get user email (from Google or manual login)
    const email = localStorage.getItem("googleEmail") || localStorage.getItem("manualEmail");
    setIsLoggedIn(!!email); // convert to true/false

    // If email exists, fetch user info from Firestore
    if (email) {
      const fetchProfileData = async () => {
        try {
          const userRef = doc(db, "users", email); // Reference to user document
          const userSnap = await getDoc(userRef); // Get user data
          if (userSnap.exists()) {
            const data = userSnap.data(); // Get actual data
            setUserName(data.name || ""); // Set user's name
            setPhotoURL(data.photoURL || ""); // Set profile photo
          }
        } catch (err) {
          console.error("Failed to fetch user data for navbar:", err);
        }
      };
      fetchProfileData();
    }
  }, [location]);

  return (
    <header className="header">
      <div className="container">
        {/* Website Logo */}
        <h1 className="logo">Volunteer Hub</h1>

        {/* Navigation Links */}
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/profile">Profile</Link></li>

            {/* Show "Login" only if user is not logged in */}
            {!isLoggedIn && (
              <li className="login-btn"><Link to="/login">Login</Link></li>
            )}

            {/* If user is logged in, show their photo and name */}
            {isLoggedIn && (
              <li
                className="profile-summary"
                onClick={() => navigate("/profile")}
                style={{ cursor: "pointer" }}
              >
                {/* Display profile photo if available */}
                {photoURL && (
                  <img
                    src={photoURL}
                    alt="User"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginBottom: "4px"
                    }}
                  />
                )}
                {/* Display user name under the photo */}
                <div style={{
                  fontSize: "14px",
                  color: "white",
                  textAlign: "center"
                }}>
                  {userName}
                </div>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
