import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';


function Header2() {
  return (
    <div className='container-fluid' style={{ borderRadius: "90px" }}>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="pic.jpg" class="d-block w-100"  style={{height:"750px",width:"600px",borderRadius:"30px"}} alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{ paddingRight: "500px", paddingBottom: "200px" }}>
              <div className="text-center px-6 relative w-full h-screen bg-covertext-white">
                <br></br><br></br><br></br><br></br><br></br>                     
                <button                                                   
                  className="px-4 py-2 border border-white rounded-full mb-4 uppercase text-sm tracking-wide hover:bg-white hover:text-black transition"
                  style={{ borderRadius: "30px", width: "250px" }}>
                  Practice Positive Energy
                </button>
                <h1 className="text-7xl font-bold leading-tight md:text-7xl" style={{ color: "black" }}>
                  Heal yourself <br /> through yoga
                </h1>
                <hr style={{backgroundColor: "black",height: "4px",border: "none"}}/>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"style={{ color: "black" }}>
                  We all need a little space to grow. Give yourself the space
                  you need to find your inner you.
                </p>
                <div className="mt-6">
                  <button className="px-6 py-3 bg-white text-black rounded-full text-lg font-medium flex items-center space-x-2 hover:bg-gray-200 transition"
                   style={{ borderRadius: "30px", width: "150px" }}>
                    <span>Contact Us</span>
                    <span className="ml-2">&#x2192;</span>
                  </button>
                </div>
              </div>
            </div>
    </div>
    <div class="carousel-item">
      <img src="banner.jpg" class="d-block w-100" style={{height:"750px",width:"600px",borderRadius:"30px"}}  alt="..."/>
            <div class="carousel-caption d-none d-md-block" style={{ paddingRight: "500px", paddingBottom: "200px" }}>
              <div className="text-center px-6 relative w-full h-screen bg-covertext-white">
                <br></br><br></br><br></br><br></br><br></br>
                <button
                  className="px-4 py-2 border border-white rounded-full mb-4 uppercase text-sm tracking-wide hover:bg-white hover:text-black transition"
                  style={{ borderRadius: "30px", width: "250px" }}>
                  Practice Positive Energy
                </button>
                <h1 className="text-5xl font-bold leading-tight md:text-7xl" style={{ color: "black" }}>
                  Heal yourself <br /> through yoga
                </h1>
                <hr style={{backgroundColor: "black",height: "4px",border: "none"}}/>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"style={{ color: "black" }}>
                  We all need a little space to grow. Give yourself the space
                  you need to find your inner you.
                </p>
                <div className="mt-6">
                  <button className="px-6 py-3 bg-white text-black rounded-full text-lg font-medium flex items-center space-x-2 hover:bg-gray-200 transition" style={{ borderRadius: "30px", width: "150px" }}>
                    <span>Contact Us</span>
                    <span className="ml-2">&#x2192;</span>
                  </button>
                </div>
              </div>
            </div>
    </div>
    <div class="carousel-item">
      <img src="pic.jpg" class="d-block w-100" style={{height:"750px",width:"600px",borderRadius:"30px"}}  alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{ paddingRight: "500px", paddingBottom: "200px" }}>
              <div className="text-center px-6 relative w-full h-screen bg-covertext-white">
                <br></br><br></br><br></br><br></br><br></br>
                <button
                  className="px-4 py-2 border border-white rounded-full mb-4 uppercase text-sm tracking-wide hover:bg-white hover:text-black transition"
                  style={{ borderRadius: "30px", width: "250px" }}>
                  Practice Positive Energy
                </button>
                <h1 className="text-5xl font-bold leading-tight md:text-7xl" style={{ color: "black" }}>
                  Heal yourself <br /> through yoga
                </h1>
                <hr style={{backgroundColor: "black",height: "4px",border: "none"}}/>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"style={{ color: "black" }}>
                  We all need a little space to grow. Give yourself the space
                  you need to find your inner you.
                </p>
                <div className="mt-6">
                  <button className="px-6 py-3 bg-white text-black rounded-full text-lg font-medium flex items-center space-x-2 hover:bg-gray-200 transition" style={{ borderRadius: "30px", width: "150px" }}>
                    <span>Contact Us</span>
                    <span className="ml-2">&#x2192;</span>
                  </button>
                </div>
              </div>
            </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



{/* <!-- div start --> */}
<div
  style={{
    backgroundColor: "#f0cc57",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "10px",
    height: "auto", // Adjusted height for mobile responsiveness
  }}
  className="responsive-div"
>
  {/* <!-- Left Section --> */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      marginBottom: "20px", // Added spacing for mobile stacking
    }}
    className="left-section"
  >
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
  <div
    style={{ textAlign: "center", marginBottom: "20px" }} // Adjusted for mobile stacking
    className="center-section"
  >
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
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column", // Adjusted for mobile responsiveness
    }}
    className="right-section"
  >
    <p
      style={{
        margin: "0",
        marginBottom: "10px", // Added spacing for stacked layout
        fontSize: "16px",
        fontWeight: "bold",
        color: "#333",
        textAlign: "center", // Center text for mobile
      }}
    >
      Click on this video to check how we work with our clients
    </p>
    <a href="video-link.html">
      <img
        src="pic.jpg"
        alt="Video Thumbnail"
        style={{
          width: "100px",
          height: "60px",
          borderRadius: "10px",
        }}
      />
    </a>
  </div>
</div>
{/* <!-- div end --> */}

    </div>
  )
}

export default Header2
