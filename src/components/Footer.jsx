import React, { useState } from 'react';

function Footer() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target.message.value;

    fetch('http://localhost/submit_contact.php', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        handleModalToggle();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2023 Volunteer Hub. All rights reserved.</p>

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

        <div className="contact-us">
          <button onClick={handleModalToggle} className="contact-us-button">
            Contact Us
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={handleModalToggle}>
              &times;
            </span>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <textarea name="message" placeholder="Write your inquiry here..." required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
