import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../../css/Cheader.css";

function Cheader() {
  return (
    <div className="container-fluid p-0">
      <div
        className="position-relative"
        style={{ borderRadius: "50px", overflow: "hidden" }}
      >
        {/* Hero Image */}
        <div className="hero-image" style={{ height: "600px" }}>
          <img
            src="pic.jpg"
            className="w-100 h-100"
            alt="Hero"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light position-absolute w-100 top-0 py-4">
          <div className="container-fluid px-5" style={{backgroundColor:" transparent"}}>
            {/* Logo */}
            <Link className="navbar-brand fw-bold fs-3" to="#">
              Yoge
            </Link>

            {/* Hamburger Menu */}
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
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul
                className="navbar-nav mx-auto fw-bold"
                style={{ gap: "2rem" }}
              >
                <li className="nav-item">
                  <Link to="/" className="nav-link text-black">
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-black"
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

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-black"
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

                <li className="nav-item">
                  <Link to="/about" className="nav-link text-black">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/contact" className="nav-link text-black">
                    Contacts
                  </Link>
                </li>
              </ul>

              {/* Search Icon */}
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                <FaSearch className="text-black" style={{ fontSize: "20px" }} />
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div
          className="position-absolute top-50 start-0 translate-middle-y"
          style={{ padding: "0 5rem" }}
        >
          <h1
            className="font-bold"
            style={{
              color: "black",
              fontSize: "70px",
              lineHeight: "1.2",
            }}
          >
            About Us
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Cheader;