import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../css/HealthClub.css";

function HealthClubLandingPage() {
  return (
    <div className="landing-page container-fluid ms-0 ms-md-5 mt-5" style={{ backgroundColor: "#e9edf5" }}>
      <Container fluid className="p-0 position-relative">
        <div className="hero-section" style={{ backgroundColor: "#e9edf5" }}>
          <Row className="g-0 flex-column-reverse flex-md-row" >
            <Col md={6} className="hero-image-container" >
              <img
                src="pic.jpg"
                alt="Person practicing yoga outdoors"
                className="hero-image"/>
                <div className="stats-card">
                <div className="stats-number">
                  <span className="asterisk">*</span> 2000
                  <span className="plus">+</span>
                </div>
                <hr className="stats-divider" />
                <div className="stats-text">Happy club members</div>
              </div>
            </Col>
            
            <Col md={5} className="content-section" style={{backgroundColor:"#e9edf5"}}>
              <div className="content-wrapper" >
                <div className="about-section">
                  <Button variant="outline-dark" className="about-button">
                    ABOUT US
                  </Button>
                  <hr className="section-divider" />
                  <h1 className="main-heading">
                    Start your healthy life today with us
                  </h1>

                  <p className="description-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't look
                    even.
                  </p>

                  <Row className="services-section mx-0">
                    <Col sm={6} className="service-item px-0 pe-md-2">
                      <div className="service-icon-wrapper">
                        <img
                          src="yellow1.jpg"
                          alt="Meditation icon"
                          className="service-icon"
                        />
                      </div>
                      <h3 className="service-title">Changing rooms</h3>
                      <p className="service-description">
                        Neque blandit consectetur viverra placerat ante.
                      </p>
                    </Col>

                    <Col sm={6} className="service-item px-0 ps-md-2">
                      <div className="service-icon-wrapper">
                        <img
                          src="yellow1.jpg"
                          alt="Training icon"
                          className="service-icon"
                        />
                      </div>
                      <h3 className="service-title">Training Programs</h3>
                      <p className="service-description">
                        Neque blandit consectetur viverra placerat ante.
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Button
        variant="light"
        className="back-to-top-button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </Button>
    </div>
  );
}

export default HealthClubLandingPage;