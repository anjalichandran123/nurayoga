import React from "react";
import { Phone as PhoneIcon, Mail as MailIcon } from "lucide-react";

function Footer() {
  return (
    <div class="mt-5" style={{ backgroundColor: "#E5C466", height: "130px" }}>
      <div class="container overflow-hidden">
        <div class="row gx-5">
          <div class="col" style={{paddingRight:"900px",paddingTop:"30px"}}>
            <div className="flex items-center space-x-6">
              <a href="#classes" style={{color:"black",textDecoration:"none"}}>
                CLASSES
              </a>
              <span style={{color:"white"}}>•</span>
              <a href="#trainers" style={{color:"black",textDecoration:"none"}}>
                TRAINERS
              </a>
              <span style={{color:"white"}}>•</span>
              <a href="#schedule" style={{color:"black",textDecoration:"none"}}>
                SCHEDULE
              </a>
              <span style={{color:"white"}}>•</span>
              <a href="#event" style={{color:"black",textDecoration:"none"}}>
                EVENT
              </a>
            </div>
          </div>
          <div class="col" style={{paddingLeft:"900px"}}>
            <div className="flex items-center space-x-4" style={{}}>
              <PhoneIcon className="h-5 w-5 text-gray-800" />
              <span className="ml-2 text-gray-800">+1(212) 255-511</span>
              <MailIcon className="h-5 w-5 text-gray-800" />
              <span className="ml-2 text-gray-800">info@yogacare.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
