import React, { useState } from 'react';

// Footer component
function Footer() {
  // State to control the modal visibility (open/close)
  const [showModal, setShowModal] = useState(false);
/*
useState
We used the useState hook to manage the state of showing or hiding the Contact Us modal.
On submit, the message is sent using fetch as a POST request to a backend PHP file (submit_contact.php).
*/
  
  // Toggle modal when user clicks "Contact Us" or close button
  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  // Handle form submit when user sends a message
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    const message = e.target.message.value; // get message from textarea

    // Send the message to backend using fetch
    fetch('http://localhost/submit_contact.php', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json()) // convert response to JSON
      .then((data) => {
        alert(data.message); // show success message
        handleModalToggle(); // close the modal
      })
      .catch((error) => {
        console.error('Error:', error); // show error in console
      });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Footer copyright text */}
        <p>&copy; 2023 Volunteer Hub. All rights reserved.</p>

        {/* Social media icons */}
        <div className="social-links">
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Contact Us button */}
        <div className="contact-us">
          <button onClick={handleModalToggle} className="contact-us-button">
            Contact Us
          </button>
        </div>
      </div>

      {/* Modal shows only when showModal is true */}
      {showModal && (
        <div className="modal">
          <div className="contact-modal-content">
            {/* Close button */}
            <span className="close-btn" onClick={handleModalToggle}>
              &times;
            </span>
            
            {/* Modal form */}
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              {/* Message textarea */}
              <textarea
                name="message"
                placeholder="Write your inquiry here..."
                required
              ></textarea>

              {/* Submit button */}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
