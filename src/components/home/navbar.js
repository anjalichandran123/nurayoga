import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../../css/Navbar.css";

function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light" style={{paddingRight:"80px"}}>
        <h2 className="brand-name">Yoge</h2>

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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-bold nav-links">
            <li className="nav-item">
              <Link to="/" className="nav-link text-black">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-black"
                id="navbarDropdownPages"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                Pages
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownPages"
              >
                <li>
                  <Link className="dropdown-item" href="#">
                    Page 1
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Page 2
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Page 3
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Page 4
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Page 5
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-black"
                id="navbarDropdownServices"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                Services
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownServices"
              >
                <li>
                  <Link className="dropdown-item" href="#">
                    Service 1
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Service 2
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Service 3
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Service 4
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Service 5
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link text-black">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link text-black">
                Contact
              </Link>
            </li>
          </ul>

          <div className="search-icon">
            <FaSearch />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;