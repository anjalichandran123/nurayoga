import React from "react";
import "../../css/Contactpage.css";

const ContactPage = () => {
  return (
    <div className="container-fluid">
      {/* Contact Button */}
      <button className="btn btn-outline-dark rounded-pill contact-btn">
        CONTACT US
      </button>

      {/* Line Divider */}
      <hr style={{ border: "1px solid black" }} />

      {/* Heading */}
      <h1 className="display-4 fw-bold mt-4">
        Contact & hire us for your fitness!
      </h1>

      {/* Subtext */}
      <p className="text-muted mt-3">
        There are many variations of passages of Lorem Ipsum available, but the
        in some form, or randomised words which don't look even.
      </p>

      {/* Form and Yoga Session */}
      <div className="row mt-5">
        {/* Form Section */}
        <div className="col-md-7" style={{height:"550px"}}>
          <div className="form-container">
            <h2 className="mb-4">Send a message</h2>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input type="text" placeholder="Your Name" />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label>Your Email *</label>
                    <input type="email" placeholder="Your Email" />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label>Your Phone *</label>
                    <input type="text" placeholder="Your Phone" />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <label>Subject</label>
                    <input type="text" placeholder="Subject" />
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <label>Message</label>
                <textarea rows="3" placeholder="Message"></textarea>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="saveInfo"
                />
                <label className="form-check-label" htmlFor="saveInfo">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
              <button
                type="submit"
                className="btn rounded-pill"
                style={{ backgroundColor: "#4A9078", color: "white" }}
              >
                SUBMIT NOW <span style={{ paddingLeft: "5px" }}>✈</span>
              </button>
            </form>
          </div>
        </div>

        {/* Yoga Session Section */}
        <div className="col-md-5" style={{height:"550px"}}>
          <div className="yoga-session-container">
            <img
              src="pic.jpg"
              alt="Yoga Session"
              className="yoga-session-img"
            />
            <div className="yoga-info">
              <h3 className="fw-bold mt-3">
                Relax body & mind for visit our yoga session!!
              </h3>
              <p className="mt-3">
                <strong>Opening days :</strong>
                <br />
                mon - fri : 07:00am to 06:00pm
                <br />
                sat - sun : Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;