import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedinIn, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Tenth() {
  const iconStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60px", // Circle width
    height: "60px", // Circle height
    borderRadius: "50%", // Makes it circular
    backgroundColor: "#f0f0f0", // Light gray background
    color: "#000", // Icon color
    fontSize: "24px", // Icon size
    margin: "10px", // Spacing between icons
    gap:"20px",
    
    
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "20px",
  };

  const columnStyle = {
    flex: "1 1 300px", // Flexible width
    padding: "10px",
  };

  return (
    <div className="container-fluid mt-5">
      <div style={containerStyle}>
        {/* Column 1: About Section */}
        <div style={columnStyle}>
          <h3 className="text-lg font-semibold">Yoge</h3>
          <p className="mt-4 text-gray-500 text-left">
  Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan risus. In vitae sapien viverra est duo ei ullum inani senserit.
</p>
          <div style={{ display: "flex", justifyContent: "flex-start", gap: "15px"}}>
            <div style={iconStyle}>
              <FontAwesomeIcon icon={faFacebook} style={{paddingLeft:"400px"}} />
              <FontAwesomeIcon icon={faLinkedinIn} />            
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>

        {/* Column 2: Working Time */}
        <div style={columnStyle}>
          <h3 className="text-lg font-semibold">Working Time</h3>
          <ul className="mt-4 text-gray-500 space-y-2" style={{paddingLeft:"100px"}}>
            <li style={{paddingRight:"150px"}}>Mon - Fri: 9.00am - 5.00pm</li>
            <li style={{paddingRight:"150px"}}>Saturday: 10.00am - 6.00pm</li>
            <li style={{paddingRight:"240px"}}>Sunday: Closed</li>
          </ul>
        </div>

        {/* Column 3: Address Section */}
        <div style={columnStyle}>
          <h3 className="text-lg font-semibold">Our Address</h3>
          <p className="mt-2 text-gray-500 mt-4">
            Old Westbury 256, New York 11201, United States
          </p>
          <p className="text-gray-500 text-sm mt-4">&copy; 2023 PBM Infotech</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-black">
              Terms and Conditions
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
            Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tenth;
