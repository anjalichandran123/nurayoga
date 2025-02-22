import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import '../../css/Cheader.css';

function Cheader() {
  return (
    <div className="container-fluid" style={{ borderRadius: "300px" }}>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ height: "650px", borderRadius: "100px" }}
      >
        <div className="carousel-indicators">
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light responsive-div">
            <div className="container-fluid">
              {/* Logo Section */}
              <div className="left-section">
                <Link
                  className="navbar-brand fw-bold fs-3"
                  to="#"
                  style={{ paddingBottom: "550px", paddingLeft: "500px" }}
                >
                  Yoge
                </Link>
              </div>

              {/* Hamburger Menu for Mobile */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Navigation Items */}
              <div
                className="collapse navbar-collapse center-section"
                id="navbarNav"
                style={{
                  paddingRight: "850px",
                  gap: "80px",
                  paddingBottom: "550px",
                }}
              >
                <ul
                  className="navbar-nav ms-auto fw-bold"
                  style={{ gap: "30px", paddingLeft: "300px" }}
                >
                  {/* Home Link */}
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link"
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      Home
                    </Link>
                  </li>

                  {/* Pages Dropdown */}
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdownPages"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownPages"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <li key={`page-${num}`}>
                          <Link className="dropdown-item" to="#">
                            Page {num}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* Services Dropdown */}
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdownServices"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownServices"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <li key={`service-${num}`}>
                          <Link className="dropdown-item" to="#">
                            Service {num}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* About Link */}
                  <li className="nav-item">
                    <Link
                      to="/about"
                      className="nav-link"
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      About
                    </Link>
                  </li>

                  {/* Contact Link */}
                  <li className="nav-item">
                    <Link
                      to="/contact"
                      className="nav-link"
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      Contacts
                    </Link>
                  </li>
                </ul>

                {/* Search Icon Section */}
                <div className="right-section">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  >
                    <FaSearch style={{ color: "black", fontSize: "20px" }} />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Carousel Content */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="pic.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: "600px", borderRadius: "50px" }}
            />
            <div
              className="carousel-caption content-container"
              style={{
                paddingRight: "600px",
                paddingBottom: "300px",
                fontSize: "50px",
              }}
            >
              <div className="text-center px-6 relative w-full h-screen bg-covertext-white">
                <h1
                  className="font-bold leading-tight"
                  style={{ color: "black", fontSize: "70px" }}
                >
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cheader