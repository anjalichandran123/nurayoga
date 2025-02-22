import React from "react";
import { Phone as PhoneIcon, Mail as MailIcon } from "lucide-react";
import "../../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="navigation-links">
          <a href="#classes">CLASSES</a>
          <span className="divider">•</span>
          <a href="#trainers">TRAINERS</a>
          <span className="divider">•</span>
          <a href="#schedule">SCHEDULE</a>
          <span className="divider">•</span>
          <a href="#event">EVENT</a>
        </div>
        
        <div className="contact-info">
          <div className="contact-item">
            <PhoneIcon className="icon" />
            <span>+1(212) 255-511</span>
          </div>
          <div className="contact-item">
            <MailIcon className="icon" />
            <span>info@yogacare.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;