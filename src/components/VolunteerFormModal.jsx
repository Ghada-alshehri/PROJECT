import React from "react";

// VolunteerFormModal displays a form for users to apply to a volunteering opportunity
function VolunteerFormModal({ formData, onChange, onSubmit, onClose, success }) {
  return (
    // Outer modal container (clicking outside will close the modal)
    <div className="modal active" onClick={(e) => e.target.classList.contains("modal") && onClose()}>
      
      {/* Inner modal content (clicking inside doesn't close the modal) */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        {/* Close (X) button */}
        <span className="close-btn" onClick={onClose}>&times;</span>

        {/* Modal title */}
        <h2>Volunteer Application</h2>

        {/* Volunteer application form */}
        <form onSubmit={onSubmit} className="volunteer-form">

          {/* Render Full Name, Email, and Phone fields */}
          {["fullName", "email", "phone"].map((field) => (
            <div className="form-group" key={field}>
              <label>{field === "fullName" ? "Full Name" : field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"} // Input type based on field
                name={field}
                value={formData[field]}
                onChange={onChange}
                pattern={field === "phone" ? "^05\\d{8}$" : undefined} // Phone validation pattern
                title={field === "phone" ? "Phone number must start with 05 and be exactly 10 digits.  " : undefined}
                required
              />
            </div>
          ))}

          {/* Availability dropdown (multi-select) */}
          <div className="form-group">
            <label>Available Time Slots</label>
            <select name="availability" multiple value={formData.availability} onChange={onChange} required>
              <option value="morning">Morning (8AM-12PM)</option>
              <option value="afternoon">Afternoon (1PM-5PM)</option>
              <option value="evening">Evening (6PM-9PM)</option>
            </select>
          </div>

          {/* Textarea for relevant skills */}
          <div className="form-group">
            <label>Relevant Skills</label>
            <textarea name="skills" value={formData.skills} onChange={onChange} rows="3" required />
          </div>

          {/* Form action buttons: Cancel and Submit */}
          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="submit-btn">Submit Application</button>
          </div>
        </form>

        {/* Success message after submission */}
        {success && <p style={{ color: "green", marginTop: "20px", textAlign: "center" }}>Application submitted successfully!</p>}
      </div>
    </div>
  );
}

export default VolunteerFormModal;
