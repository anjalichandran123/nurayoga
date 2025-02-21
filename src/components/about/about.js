import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Header.css";

function Cheader() {
  return (
    <div class="container-fluid" style={{ borderRadius: "300px" }}>
      {/* <!--carousal start--> */}

      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
        style={{ height: "650px", borderRadius: "100px" }}
      >
        <div class="carousel-indicators">
          {/* <!-- Navbar start --> */}
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <Link
                class="navbar-brand fw-bold fs-3"
                href="#"
                style={{ paddingBottom: "550px", paddingLeft: "500px" }}
              >
                Yoge
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse"
                id="navbarNav"
                style={{
                  paddingRight: "850px",
                  gap: "80px",
                  paddingBottom: "550px",
                }}
              >
                <ul
                  class="navbar-nav ms-auto fw-bold"
                  style={{ gap: "30px", paddingLeft: "300px" }}
                >
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
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      id="navbarDropdownPages"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                    >
                      Pages
                    </Link>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownPages"
                    >
                      <li>
                        <Link class="dropdown-item" href="#">
                          Page 1
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          Page 2
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          Page 3
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          Page 4
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          Page 5
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      id="navbarDropdownServices"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                    >
                      Services
                    </Link>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownServices"
                    >
                      <li>
                        <Link class="dropdown-item" href="#">
                          Service 1
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          Service 2
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          Service 3
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          Service 4
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          Service 5
                        </Link>
                      </li>
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "white", // Set background color (blue in this case)
                    borderRadius: "50%", // Make the background round
                    cursor: "pointer", // Change the cursor to indicate it's clickable
                  }}
                >
                  <FaSearch style={{ color: "black", fontSize: "20px" }} />{" "}
                  {/* Set the icon's color and size */}
                </div>
              </div>
            </div>
          </nav>

          <br></br>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="pic.jpg"
              class="d-block w-100"
              alt="..."
              style={{ height: "600px", borderRadius: "50px" }}
            />
            <div
              class="carousel-caption "
              style={{
                paddingRight: "600px",
                paddingBottom: "300px",
                fontSize: "50px",
              }}
            >
              <div className="text-center px-6 relative w-full h-screen bg-covertext-white">
                <h1
                  className=" font-bold leading-tight"
                  style={{ color: "black", fontSize: "70px" }}
                >
                  About Us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--carousel end--> */}
    </div>
  );
}

export default Cheader;
