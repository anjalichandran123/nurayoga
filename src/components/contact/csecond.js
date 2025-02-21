import React from "react";
import './Contactpage.css';

const ContactPage = () => {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#eef4f1" }}>
      {/* Button */}
      <button
        className="btn btn-outline-dark rounded-pill px-4 py-2 mb-4"
        style={{ paddingRight: "600px" }}
      >
        CONTACT US
      </button>

      {/* Line Divider */}
      <hr style={{ border: "1px solid black" }} />

      {/* Heading */}
      <h1
        className="display-4 fw-bold mt-4"
        style={{ color: "#222", paddingRight: "450px" }}
      >
        Contact & hire us for your fitness!
      </h1>

      {/* Subtext */}
      <p
        className="text-muted mt-3"
        style={{ color: "#222", paddingRight: "400px" }}
      >
        There are many variations of passages of Lorem Ipsum available, but the
        in some form, or randomised words which don't look even.
      </p>

      {/* Form and Yoga Session */}
      <div className="row mt-5">
        {/* Form Section */}
        <div className="col-md-7">
          <div className="p-4 bg-white rounded">
            <h2 className="mb-4">Send a message</h2>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Your Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Your Phone *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Phone"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Message"
                ></textarea>
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
              <button type="submit" className="btn rounded-pill" style={{backgroundColor:"#4A9078"}}>
                SUBMIT NOW <span style={{ paddingLeft: "5px" }}>✈</span>
              </button>
            </form>
          </div>
        </div>

        {/* Yoga Session Section */}
        <div className="col-md-5" style={{height:"400px",width:"620px",borderRadius:"30px"}}>
        
          <div
            className="p-4 text-white rounded"
            style={{
              backgroundColor: "#4A9078", // Green background
              backgroundImage: `url('https://via.placeholder.com/400')`,
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
              height:"490px"
            }}
          >
            <img 
  src="pic.jpg" 
  alt="" 
  style={{ height: "260px", width: "500px" }} 
/>

            
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
  );
};

export default ContactPage;
