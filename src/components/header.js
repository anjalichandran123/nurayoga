import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div class="container-fluid" style={{ borderRadius: "90px" }}>
      {/* <!--carousal start--> */}

      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
        style={{ height: "930px", borderRadius: "90px" }}
      >
        <div class="carousel-indicators">
          {/* <!-- Navbar start --> */}
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <Link
                class="navbar-brand fw-bold fs-3"
                href="#"
                style={{ paddingBottom: "850px", paddingLeft: "500px" }}
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
                  paddingBottom: "850px",
                }}
              >
                <ul
                  class="navbar-nav ms-auto fw-bold"
                  style={{ gap: "30px", paddingLeft: "300px" }}
                >
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      role="button"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                    >
                      Home
                    </Link>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <Link class="dropdown-item" href="#">
                          Home 1
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          Home 2
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          Home 3
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          {" "}
                          Home 4
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          Home 5
                        </Link>
                      </li>
                    </ul>
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
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      id="navbarDropdownEvents"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                    >
                      Events
                    </Link>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownEvents"
                    >
                      <li>
                        <Link class="dropdown-item" href="#">
                          Event 1
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          Event 2
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          Event 3
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          Event 4
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          Event 5
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                  <Link href="cheader.js" style={{textDecoration:"none",color:"black",paddingTop:"450px"}}>Contact</Link>
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
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="pic.jpg" class="d-block w-100" alt="..." />
            <div
              class="carousel-caption "
              style={{ paddingRight: "400px", paddingBottom: "300px" }}
            >
              <div className="text-center px-6 relative w-full h-screen bg-covertext-white">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button
                  className="px-4 py-2 border border-white rounded-full mb-4 uppercase text-sm tracking-wide hover:bg-white hover:text-black transition"
                  style={{ borderRadius: "30px", width: "250px" }}
                >
                  Practice Positive Energy
                </button>
                <h1
                  className=" font-bold leading-tight"
                  style={{ color: "black", fontSize: "80px" }}
                >
                  Heal yourself <br></br>through yoga
                </h1>
                <hr></hr>
                <p
                  className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
                  style={{ color: "black" }}
                >
                  We all need a little space to grow. Give yourself the space
                  you need to find your inner you.
                </p>
                <div className="mt-6">
                  <button
                    className="px-6 py-3 bg-white text-black rounded-full text-lg font-medium flex items-center space-x-2 hover:bg-gray-200 transition"
                    style={{ borderRadius: "30px", width: "150px" }}
                  >
                    <span>Contact Us</span>
                    <span className="ml-2">&#x2192;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="pic.jpg" class="d-block w-100" alt="..." />
            <div
              class="carousel-caption d-none d-md-block"
              style={{ paddingRight: "400px", paddingBottom: "400px" }}
            >
              <div className="text-center px-6 relative w-full h-screen bg-covertext-white">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button
                  className="px-4 py-2 border border-white rounded-full mb-4 uppercase text-sm tracking-wide hover:bg-white hover:text-black transition"
                  style={{ borderRadius: "30px", width: "250px" }}
                >
                  Practice Positive Energy
                </button>
                <h1
                  className="text-5xl font-bold leading-tight md:text-7xl"
                  style={{ color: "black" }}
                >
                  Heal yourself <br /> through yoga
                </h1>
                <hr
                  style={{
                    backgroundColor: "black",
                    height: "4px",
                    border: "none",
                  }}
                />
                <p
                  className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
                  style={{ color: "black" }}
                >
                  We all need a little space to grow. Give yourself the space
                  you need to find your inner you.
                </p>
                <div className="mt-6">
                  <button
                    className="px-6 py-3 bg-white text-black rounded-full text-lg font-medium flex items-center space-x-2 hover:bg-gray-200 transition"
                    style={{ borderRadius: "30px", width: "150px" }}
                  >
                    <span>Contact Us</span>
                    <span className="ml-2">&#x2192;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="pic.jpg" class="d-block w-100" alt="..." />
            <div
              class="carousel-caption d-none d-md-block"
              style={{ paddingRight: "400px", paddingBottom: "400px" }}
            >
              <div className="text-center px-6 relative w-full h-screen bg-covertext-white">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button
                  className="px-4 py-2 border border-white rounded-full mb-4 uppercase text-sm tracking-wide hover:bg-white hover:text-black transition"
                  style={{ borderRadius: "30px", width: "250px" }}
                >
                  Practice Positive Energy
                </button>
                <h1
                  className="text-5xl font-bold leading-tight md:text-7xl"
                  style={{ color: "black", fontSize: "80px" }}
                >
                  Heal yourself <br /> through yoga
                </h1>
                <hr></hr>
                <p
                  className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
                  style={{ color: "black", fontSize: "80px" }}
                >
                  We all need a little space to grow. Give yourself the space
                  you need to find your inner you.
                </p>
                <div className="mt-6">
                  <button
                    className="px-6 py-3 bg-white text-black rounded-full text-lg font-medium flex items-center space-x-2 hover:bg-gray-200 transition"
                    style={{ borderRadius: "30px", width: "150px" }}
                  >
                    <span>Contact Us</span>
                    <span className="ml-2">&#x2192;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!--carousel end--> */}

      {/* <!-- div start --> */}
      <div
        style={{
          backgroundColor: "#f0cc57",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "10px",
          height: "150px",
        }}
      >
        {/* <!-- Left Section --> */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", marginRight: "10px" }}>
            <img
              src="pic.jpg"
              alt="User 1"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "-10px",
                border: "2px solid white",
              }}
            />
            <img
              src="pic.jpg"
              alt="User 2"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "-10px",
                border: "2px solid white",
              }}
            />
            <img
              src="pic.jpg"
              alt="User 3"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "2px solid white",
              }}
            />
          </div>
          <p
            style={{
              margin: "0",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            More than <span style={{ color: "#000" }}>9.5k members</span> are
            connected with us
          </p>
        </div>

        {/* <!-- Center Section --> */}
        <div style={{ textAlign: "center" }}>
          <Link
            href="https://www.youtube.com/watch?v=lMJImKo-eZU"
            class="video-popup step-textcircle"
          >
            <span class="icon d-center radius100">
              <i class="fas fa-play"></i>
            </span>
            <img
              src="step-textcircle.png"
              alt="img"
              style={{ height: "130px", background: "white" }}
              class="step-circle"
            />
          </Link>
        </div>

        {/* <!-- Right Section --> */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              margin: "0",
              marginRight: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Click on this video to check how we work with our clients
          </p>
          <a href="video-link.html">
            <img
              src="pic.jpg"
              alt="Video Thumbnail"
              style={{ width: "100px", height: "60px", borderRadius: "10px" }}
            />
          </a>
        </div>
      </div>
      {/* <!-- div end --> */}
    </div>
  );
}
export default Header;
