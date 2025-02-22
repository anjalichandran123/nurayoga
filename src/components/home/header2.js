import React from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";

function Header2() {
  return (
    <div className="header-container">
      {/* Carousel Section */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {[1, 2, 3].map((num, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={num}
            >
              <img
                src={index === 1 ? "banner.jpg" : "pic.jpg"}
                className="carousel-image"
                alt={`Slide ${num}`}
              />
              <div className="carousel-content">
                <div className="content-wrapper" style={{paddingRight:"150px"}}>
                  <button className="energy-button">
                    Practice Positive Energy
                  </button>
                  <h1 className="main-heading">
                    Heal yourself {num}
                    <br /> through yoga
                  </h1>
                  <hr className="divider" />
                  <p className="description">
                    We all need a little space to grow. Give yourself the space
                    you need to find your inner you.
                  </p>
                  <div className="cta-button-wrapper">
                    <button className="contact-button">
                      <span>Contact Us</span>
                      <span className="arrow">&#x2192;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Info Section */}
      <div className="info-section">
        {/* Members Section */}
        <div className="members-section">
          <div className="member-avatars">
            {[1, 2, 3].map((num) => (
              <img
                key={num}
                src="pic.jpg"
                alt={`User ${num}`}
                className="member-avatar"
              />
            ))}
          </div>
          <p className="members-text">
            More than <span className="highlight">9.5k members</span> are
            connected with us
          </p>
        </div>

        {/* Video Section */}
        <div className="video-section">
          <Link
            to="https://www.youtube.com/watch?v=lMJImKo-eZU"
            className="video-popup"
          >
            <span className="play-icon">
              <i className="fas fa-play"></i>
            </span>
            <img
              src="step-textcircle.png"
              alt="Circle text"
              className="circle-image"
            />
          </Link>
        </div>

        {/* Video Info Section */}
        <div className="video-info-section">
          <p className="video-text">
            Click on this video to check how we work with our clients
          </p>
          <Link to="video-link.html" className="video-thumbnail">
            <img
              src="pic.jpg"
              alt="Video Thumbnail"
              className="thumbnail-image"
            />
          </Link>
        </div>
      </div>
    </div>
  );

}

export default Header2;