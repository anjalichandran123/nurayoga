import React, { useEffect } from "react";
import "./Eighth.css";

function Eighth() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("zoom-out");
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll(".zoom-target");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container position-relative mt-5">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="banner.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: "600px" }}
            />
            {/* Left Text Section */}
            <div
              className="position-absolute top-50 start-0 translate-middle-y text-white p-4 zoom-target"
              style={{ maxWidth: "40%" }}
            >
              <button
                className="btn btn-light fw-bold mb-3"
                style={{ borderRadius: "20px", padding: "5px 15px" }}
              >
                Why People Choose Us
              </button>
              <hr></hr>
              <h1 className="mb-4" style={{ lineHeight: "1.4" }}>
                My course helps <br />
                to become <br />
                successful in life.
              </h1>
              <p className="mb-4">
                Nullam porta enim vel tellus commodo eget laoreet odio ultrices.
                Etiam fringilla lobortis sapien sit amet cursus. Maecenas est
                orci congue egestas lobortis vel feugiat non tellus.
              </p>
              <button
                className="btn fw-bold text-dark"
                style={{
                  backgroundColor: "#fac241",
                  borderRadius: "20px",
                  padding: "10px 20px",
                }}
              >
                Read More →
              </button>
            </div>

            {/* Right Icon Section */}
            <div
              className="position-absolute top-50 end-0 translate-middle-y text-white p-4 zoom-target"
              style={{ maxWidth: "40%" }}
            >
              <div className="d-flex align-items-center mb-4">
                <div
                  className="rounded-circle bg-warning d-flex justify-content-center align-items-center"
                  style={{
                    width: "100px",
                    height: "100px",
                    color: "black",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  85%
                </div>
                <div className="ms-3">
                  <h5 className="mb-1">Happy Customers</h5>
                  <hr></hr>
                  <p>Sed risus augue commodo ornare felis non eleifend.</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div
                  className="rounded-circle bg-warning d-flex justify-content-center align-items-center"
                  style={{
                    width: "100px",
                    height: "100px",
                    color: "black",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  90%
                </div>
                <div className="ms-3">
                  <h5 className="mb-1">Experienced Trainer</h5>
                  <hr></hr>
                  <p>Sed risus augue commodo ornare felis non eleifend.</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div
                  className="rounded-circle bg-warning d-flex justify-content-center align-items-center"
                  style={{
                    width: "100px",
                    height: "100px",
                    color: "black",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  80%
                </div>
                <div className="ms-3">
                  <h5 className="mb-1">Active Clients</h5>
                  <hr></hr>
                  <p>Sed risus augue commodo ornare felis non eleifend.</p>
                </div>
              </div>
            </div>

            {/* Bottom Words Section */}
            <div className="position-absolute bottom-0 w-100 text-center word-cloud">
              <span className="word yoga">Yoga</span>
              <span className="word relax">Relax</span>
              <span className="word peace">Peace</span>
              <span className="word healthy">Healthy</span>
              <span className="word paradise">Paradise</span>
              <span className="word wellness">Wellness</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eighth;
