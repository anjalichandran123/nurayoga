import React from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

function ImageRow() {
  const imageData = [
    {
      imgSrc: "pic.jpg",
      date: "Feb 13, 2025",
      admin: "Admin",
      heading: "Which Yoga Class Is Best For Begginners?",
    },
    {
      imgSrc: "pic.jpg",
      date: "Feb 14, 2025",
      admin: "Admin",
      heading: "Spiritual Cleansing: 14 Ritualsto Detox Your Soul",
    },
    {
      imgSrc: "pic.jpg",
      date: "Feb 15, 2025",
      admin: "Admin",
      heading: "Spiritual Awakening :Definition,Signs and Symptoms",
    },
  ];

  return (
    
    <div className="container mt-5">
      <div className="w-full bg-gray-100 p-6">
      <div className="mb-8"  style={{paddingRight:"1100px"}}>
        <button className="px-4 py-2 rounded-full bg-white text-gray-800 text-sm font-medium border border-gray-200" style={{borderRadius:"300px"}}>
          OUR BLOGS
        </button>
      </div>
      <hr></hr>
      <div className="flex items-center justify-between">
        <h1 className="text-7xl font-bold text-gray-900" style={{paddingRight:"900px"}}>
          Latest posts & articles
        </h1>
        <br></br>
      </div>
    </div>
      <div className="row g-4">
        {imageData.map((data, index) => (
          <div className="col-md-4" key={index}>
            <div className="card border-0 shadow-sm" style={{borderRadius:"50px"}}>
              {/* Image Section */}
              <img
                src={data.imgSrc}
                className="img-thumbnail"
                alt={`Image ${index + 1}`}
                style={{
                  borderRadius: "30px",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              {/* Text Section */}
              <div className="p-3">
                {/* Date and Admin Row */}
                <div className="d-flex align-items-center mb-2">
                  <FaCalendarAlt className="me-2 text-primary" />
                  <span className="text-muted me-4">{data.date}</span>
                  <FaUser className="me-2 text-secondary" />
                  <span className="text-muted">{data.admin}</span>
                </div>

                {/* Heading */}
                <h5 className="fw-bold">{data.heading}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageRow;
