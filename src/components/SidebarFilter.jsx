import React from "react"; 
import "../App.css";

// SidebarFilter component to allow users to filter volunteering opportunities
const SidebarFilter = ({
  // Props used:
  filterType,         // selected duration filter (e.g., "1 day")
  setFilterType,      // function to update duration filter
  filterSkill,        // selected skill filter
  setFilterSkill,     // function to update skill filter
  filterPayment,      // selected payment filter
  setFilterPayment,   // function to update payment filter
  onReset,            // function to reset all filters
  onClose             // function to close the sidebar
  // State--> None
}) => {
  return (
    // Overlay to cover screen (clicking on it will close the filter panel)
    <div className="filter-overlay" onClick={onClose}>
      
      {/* Filter panel itself (clicking inside won't close the panel) */}
      <div className="filter-panel" onClick={(e) => e.stopPropagation()}>
        <h3>Filter Opportunities</h3>

        {/* Duration filter section */}
        <div className="filter-group">
          <label>Duration:</label>
          <div>
            <label>
              <input
                type="radio"
                checked={filterType === "1 day"}
                onChange={() => setFilterType("1 day")}
              />
              1 day
            </label>
            <br />
            <label>
              <input
                type="radio"
                checked={filterType === "2 days"}
                onChange={() => setFilterType("2 days")}
              />
              2 days
            </label>
            <br />
            <label>
              <input
                type="radio"
                checked={filterType === "3 days"}
                onChange={() => setFilterType("3 days")}
              />
              3 days
            </label>
          </div>
        </div>

        {/* Skills dropdown filter */}
        <div className="filter-group">
          <label>Skills:</label>
          <select
            value={filterSkill}
            onChange={(e) => setFilterSkill(e.target.value)}
          >
            <option value="">All Skills</option>
            <option value="Good communication skills">Good communication skills</option>
            <option value="Internet access">Internet access</option>
            <option value="Report writing">Report writing</option>
            <option value="Data analysis">Data analysis</option>
            <option value="Documentation">Documentation</option>
            <option value="Event planning">Event planning</option>
            <option value="Teamwork">Teamwork</option>
          </select>
        </div>

        {/* Payment filter section */}
        <div className="filter-group">
          <label>Payment:</label>
          <div>
            <label>
              <input
                type="radio"
                checked={filterPayment === "SR"}
                onChange={() => setFilterPayment("SR")}
              />
              SR
            </label>
            <br />
            <label>
              <input
                type="radio"
                checked={filterPayment === "None"}
                onChange={() => setFilterPayment("None")}
              />
              None
            </label>
          </div>
        </div>

        {/* Button to reset all filters */}
        <button className="reset-button" onClick={onReset}>Reset Filters</button>
      </div>
    </div>
  );
};

export default SidebarFilter;
