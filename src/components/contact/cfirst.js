import React from 'react';
import '../../css/ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info-wrapper">
      <div className="contact-container">
        <div className="contact-item">
          <div className="icon-wrapper">
            <img src="pic.jpg" alt="Phone Icon" className="contact-icon" />
          </div>
          <div className="contact-details">
            <h2>24/7 Contact us</h2>
            <p>Phone: (+55) 654-545-5418</p>
            <p>Mobile: (+01) 654-545-1235</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon-wrapper">
            <img src="pic.jpg" alt="Mail Icon" className="contact-icon" />
          </div>
          <div className="contact-details">
            <h2>24/7 Mail us</h2>
            <p>no-reply@pbmit.com</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon-wrapper">
            <img src="pic.jpg" alt="Location Icon" className="contact-icon" />
          </div>
          <div className="contact-details">
            <h2>Our Address</h2>
            <p>4821 Ride Top, Anch St, Alaska 997998, USA main city.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;