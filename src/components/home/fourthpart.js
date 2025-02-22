import React, { useEffect, useRef, useState } from "react";
import { Clock, Calendar } from "lucide-react";
import '../../css/FourthPart.css';

const WorkshopCard = ({ title, date }) => (
  <div className="workshop-card">
    <img src="pic.jpg" alt={title} />
    <div className="card-content">
      <h5>{title}</h5>
      <div className="card-details">
        <div className="detail-item">
          <Clock className="icon" />
          <span>50 min/session</span>
        </div>
        <div className="detail-item">
          <Calendar className="icon" />
          <span>{date}</span>
        </div>
      </div>
      <h4>$240/Month</h4>
    </div>
  </div>
);

const Fourthpart = () => {
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) return;
      
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const scrollAmount = scrollContainer.scrollLeft;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const scale = Math.max(0.8, 1 - (scrollAmount / maxScroll) * 0.2);
        scrollContainer.style.transform = scale(`${scale}`);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile]);

  const workshopData = [
    { title: "Web Development Basics", date: "08-11-2024" },
    { title: "UI/UX Design Workshop", date: "08-11-2024" },
    { title: "Mobile App Development", date: "08-11-2024" },
    { title: "Data Science Fundamentals", date: "08-11-2024" }
  ];

  return (
    <div className="workshop-container">
      <div className="container">
        {/* Header Section */}
        <div className="header-section">
          <button className="upcoming-button">
            Our Upcoming
          </button>
          
          <div className="header-content">
            <hr />
            <h1>Classes & Workshop</h1>
          </div>
        </div>

        {/* Cards Section */}
        <div ref={scrollContainerRef} className="cards-container">
          {workshopData.map((card, index) => (
            <div key={index} className="card-wrapper">
              <WorkshopCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fourthpart;