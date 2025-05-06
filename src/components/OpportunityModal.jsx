import React from "react";

// Modal component to show full details of a volunteering opportunity
function OpportunityModal({ opportunity, onClose, onVolunteer, children }) {
  return (
    // Outer modal container (clicking outside the modal-content will close the modal)
    <div
      className="modal active"
      onClick={(e) => e.target.classList.contains("modal") && onClose()}
    >
      {/* Inner content box (clicking inside won't close the modal) */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Close button (X) */}
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>

        {/* Opportunity Title */}
        <h2>{opportunity.title}</h2>

        <div className="opportunity-content">
          {/* Left side - main details */}
          <div className="main-details">
            <h3>Opportunity Description:</h3>
            <p>{opportunity.description}</p>

            <h3>Skills Gained:</h3>
            <ul>
              {/* List of skills gained */}
              {opportunity.skills?.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>

            <h3>Requirements:</h3>
            <ul>
              {/* List of requirements */}
              {opportunity.requirements?.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Right side - quick info and volunteer button */}
          <div className="side-details">
            <div className="detail-box">
              <h4>Location</h4>
              <p>{opportunity.location}</p>
            </div>
            <div className="detail-box">
              <h4>Duration</h4>
              <p>{opportunity.duration}</p>
            </div>
            <div className="detail-box">
              <h4>Payment</h4>
              <p>{opportunity.payment}</p>
            </div>

            {/* Button to volunteer for this opportunity */}
            <button className="volunteer-btn" onClick={onVolunteer}>
              Volunteer Now
            </button>
          </div>
        </div>

        {/* Optional map section (if coordinates exist) */}
        {opportunity.coordinates && (
          <div
            style={{
              height: "300px",
              width: "100%",
              margin: "30px 0 0",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              id="opportunity-map"
              style={{
                height: "100%",
                width: "100%",
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OpportunityModal;
