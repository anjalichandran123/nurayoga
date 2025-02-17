import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock,faCalendarDays } from "@fortawesome/free-regular-svg-icons";

function Fourthpart() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const scrollAmount = scrollContainer.scrollLeft;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        // Calculate the zoom-out effect based on scroll position
        const scale = 1 - (scrollAmount / maxScroll) * 0.2; // Adjust 0.2 for stronger/weaker zoom-out
        scrollContainer.style.transform = `scale(${scale})`;
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div  className="mt-5" style={{ backgroundColor: "#4A9078", padding: "20px", paddingLeft: "25px" ,marginLeft:"90px",height:"600px", width:"1350px",borderRadius:"30px"}}>
      <div className="container mt-4">
        {/* Header Section */}
        <div
          className="relative bg-green-500 h-64 flex flex-col items-center justify-center"
          style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/circuit-board.png')",
          }}
        >
          {/* Button */}
          <div style={{ paddingRight: "1100px"}}>
            <button className="absolute top-8 left-8 px-4 py-2 text-sm font-bold text-black bg-white rounded-full shadow hover:shadow-lg transition" style={{borderRadius:"20px"}}>
              Our Upcoming
            </button>
          </div>
          <hr className="border-t border-white w-2/3 mx-auto mt-4" />
          {/* Content */}
          <div className="text-center" style={{paddingRight:"900px"}}>
            <h1 className="text-4xl font-bold text-white">Classes & Workshop</h1>
          </div>
        </div>

        {/* Cards Section */}
        <div
          ref={scrollContainerRef}
          className="d-flex flex-row overflow-auto mt-5"
          style={{
            gap: "20px",
            whiteSpace: "nowrap",
            transition: "transform 0.3s ease-in-out",
            transformOrigin: "center", // Ensures zoom-out looks natural
            paddingLeft:"30px"
          }}
        >
          {/* Card 1 */}
          <div className="card" style={{ width: "18rem" }}>
            <img src="pic.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title 1</h5>
              <FontAwesomeIcon icon={faClock} style={{ color: "black", fontSize: "16px"}} />50 min/session
              <FontAwesomeIcon icon={faCalendarDays} style={{ color: "black", fontSize: "16px",gap:"20px" }} />08-11-2024
              <br></br>
              <h4>$240/Month</h4>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card" style={{ width: "18rem" }}>
            <img src="pic.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title 2</h5>
              <FontAwesomeIcon icon={faClock} style={{ color: "black", fontSize: "16px"}} />50 min/session
              <FontAwesomeIcon icon={faCalendarDays} style={{ color: "black", fontSize: "16px" }} />08-11-2024
              <br></br>
              <h4>$240/Month</h4>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card" style={{ width: "18rem" }}>
            <img src="pic.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title 3</h5>
              <FontAwesomeIcon icon={faClock} style={{ color: "black", fontSize: "16px"}} />50 min/session
              <FontAwesomeIcon icon={faCalendarDays} style={{ color: "black", fontSize: "16px" }} />08-11-2024
              <br></br>
              <h4>$240/Month</h4>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card" style={{ width: "18rem" }}>
            <img src="pic.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title 4</h5>
              <FontAwesomeIcon icon={faClock} style={{ color: "black", fontSize: "16px"}} />50 min/session
              <FontAwesomeIcon icon={faCalendarDays} style={{ color: "black", fontSize: "16px" }} />08-11-2024
              <br></br>
              <h4>$240/Month</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fourthpart;
