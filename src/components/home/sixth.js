import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";


function Sixth() {
  return (

    <div style={{ width: "100%", marginLeft: "10px" }}>
      {/* Container for the two images */}
      <div className="container mt-5" style={{ display: "flex", gap: "50px" }}>
        {/* Left Section */}
        <div
          style={{
            position: "relative",
            width: "700px",
            height: "400px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src="pic.jpg" // Replace with your image source
            alt="School"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          {/* Overlay Content */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "8px 16px",
                fontWeight: "bold",
                borderRadius: "20px",
                marginBottom: "15px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              JOIN OUR SCHOOL
            </button>

            <p
              style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "15px" }}
            >
              Ready to start learn? <br /> Sign up now!
            </p>

            <button
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "10px 20px",
                fontWeight: "bold",
                borderRadius: "20px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              SIGN UP NOW
            </button>
          </div>
        </div>

        <div
      style={{
        position: "relative",
        width: "700px",
        height: "400px",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Background Image */}
      <img
        src="yelow.jpg" // Replace with your image source
        alt="Newsletter"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* Overlay Content */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent overlay
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        {/* Icon */}
        <div
          style={{
            backgroundColor: "#4A9078", // Green circle background
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "15px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <FontAwesomeIcon icon={faBell} style={{ color: "white", fontSize: "20px" }} />
        </div>

        {/* Text */}
        <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "15px" }}>
          Subscribe to our newsletter
        </p>

        {/* Input Box and Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            width: "80%",
          }}
        >
          <input
            type="text"
            placeholder="Your email address"
            style={{
              flex: 1,
              border: "none",
              padding: "10px",
              borderRadius: "20px 0 0 20px",
              outline: "none",
            }}
          />
          <button
            style={{
              backgroundColor: "#4A9078",
              color: "white",
              padding: "10px 20px",
              fontWeight: "bold",
              borderRadius: "0 20px 20px 0",
              border: "none",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Sixth;
