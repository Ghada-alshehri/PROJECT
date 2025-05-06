import React from "react";

// Component to display a single volunteering opportunity card
function OpportunityCard({ opportunity, onViewDetails }) {
  return (
    <div className="volunteer-card">
      <div className="card-content">
        {/* Opportunity Title */}
        <h3>{opportunity.title}</h3>

        {/* Short Description */}
        <p style={{ color: "seagreen", fontWeight: "500" }}>{opportunity.description}</p>

        {/* Basic Details: Location, Duration, Payment */}
        <div className="details">
          <div className="detail-item"><strong>Location:</strong> {opportunity.location}</div>
          <div className="detail-item"><strong>Duration:</strong> {opportunity.duration}</div>
          <div className="detail-item"><strong>Payment:</strong> {opportunity.payment}</div>
        </div>

        {/* Skills Required */}
        <div className="skills">
          <strong>Skills Needed:</strong>
          <div className="skill-tags" style={{ marginTop: "5px" }}>
            {/* Loop through each skill and display it */}
            {opportunity.skills.map((skill, idx) => (
              <span key={idx} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Button to view more details about this opportunity */}
        <button className="view-details-btn" onClick={() => onViewDetails(opportunity)}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default OpportunityCard;
