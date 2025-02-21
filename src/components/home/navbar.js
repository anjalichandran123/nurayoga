import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          {/* Brand Name */}
          <h2 href="#" style={{ paddingLeft: "100px" }}>Yoge</h2>

          {/* Mobile Menu Toggle Button */}
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

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav ms-auto fw-bold"
              style={{ paddingRight: "100px", display: "flex", alignItems: "center", gap: "30px" }}
            >
              {/* Home Dropdown */}
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
                  id="navbarDropdownPages"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                >
                  Pages
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownPages">
                  <li><Link className="dropdown-item" href="#">Page 1</Link></li>
                  <li><Link className="dropdown-item" href="#">Page 2</Link></li>
                  <li><Link className="dropdown-item" href="#">Page 3</Link></li>
                  <li><Link className="dropdown-item" href="#">Page 4</Link></li>
                  <li><Link className="dropdown-item" href="#">Page 5</Link></li>
                </ul>
              </li>

              {/* Services Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownServices"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                >
                  Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownServices">
                  <li><Link className="dropdown-item" href="#">Service 1</Link></li>
                  <li><Link className="dropdown-item" href="#">Service 2</Link></li>
                  <li><Link className="dropdown-item" href="#">Service 3</Link></li>
                  <li><Link className="dropdown-item" href="#">Service 4</Link></li>
                  <li><Link className="dropdown-item" href="#">Service 5</Link></li>
                </ul>
              </li>

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
                  Contact
                </Link>
              </li>
            </ul>

            {/* Search Icon */}
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
      </nav>
    </div>
  );
}

export default Navbar;
