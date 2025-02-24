import React, { useEffect, useState } from "react";
import "../../css/Eighth.css";

const Eighth = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-section");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      percentage: "85%",
      title: "Happy Customers",
      description: "Sed risus augue commodo ornare felis non eleifend.",
    },
    {
      percentage: "90%",
      title: "Experienced Trainer",
      description: "Sed risus augue commodo ornare felis non eleifend.",
    },
    {
      percentage: "80%",
      title: "Active Clients",
      description: "Sed risus augue commodo ornare felis non eleifend.",
    },
  ];

  const words = ["Yoga", "Relax", "Peace", "Healthy", "Paradise", "Wellness"];

  return (
    <div className="banner-section container">
      <div className="banner-container">
        <img
          src="banner.jpg"
          alt="Banner"
          className="banner-image"
        />

        {/* Content Wrapper */}
        <div className="content-wrapper">
          {/* Left Content */}
          <div
            className={`left-section animate-section ${
              isVisible ? "visible" : ""
            }`}
          >
            <button className="choose-button">Why People Choose Us</button>
            <div className="line"></div>
            <h1 className="main-heading">
              My course helps <br className="desktop-break" />
              to become <br className="desktop-break" />
              successful in life.
            </h1>
            <p className="description">
              Nullam porta enim vel tellus commodo eget laoreet odio ultrices.
              Etiam fringilla lobortis sapien sit amet cursus. Maecenas est orci
              congue egestas lobortis vel feugiat non tellus.
            </p>
            <button className="read-more-button">Read More →</button>
          </div>

          {/* Right Stats */}
          <div
            className={`right-section animate-section ${
              isVisible ? "visible" : ""
            }`}
          >
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-circle">{stat.percentage}</div>
                <div className="stat-info">
                  <h5 className="stat-title">{stat.title}</h5>
                  <div className="line"></div>
                  <p className="stat-description">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Word Cloud */}
        <div className="word-cloud">
          {words.map((word, index) => (
            <span key={index} className="floating-word">
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eighth;