// Import required modules and components
import React from "react";
import { useNavigate } from "react-router-dom";
import NewsSection from "../components/NewsSection";

function Home() {
  // Hook to programmatically navigate between routes
  const navigate = useNavigate();


  // Handler for "Browse Opportunities" button click
  const handleBrowseClick = () => {
    navigate("/explore");
  };
/* State:
It does not use its own useState. It only uses:
useNavigate (from React Router) → to navigate to the Explore page when the user clicks Browse Opportunities.
Props:
It component does not receive props directly,
but it renders the child component: <NewsSection /> → which handles its own props and state internally.
*/
  return (
    <section id="home" className="section active">
      {/* Banner section */}
      <section className="banner-wrapper"></section>
      {/* Hero section with main heading and call-to-action */}
      <div className="hero">
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2>Find Your Perfect Volunteer Opportunity</h2>
          <p>Connect with organizations that need your skills and passion</p>
          <button className="cta-button" onClick={handleBrowseClick}>
            Browse Opportunities
          </button>
        </div>
      </div>

      {/* Features section highlighting key benefits */}
      <div className="features">
        <div className="feature-card">
          <i className="fas fa-calendar-alt"></i>
          <h3>Flexible Volunteering</h3>
          <p>Choose opportunities that fit your schedule</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-hands-helping"></i>
          <h3>Skill Matching</h3>
          <p>Get matched with tasks that align with your skills</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-certificate"></i>
          <h3>Certification</h3>
          <p>Earn certificates for your volunteer work</p>
        </div>
      </div>

      {/* Latest news or updates related to volunteering */}
      <NewsSection />
    </section>
  );
}

export default Home;







