import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about_YogaServices.css';


const AboutYogaServices = () => {
  // Default image and state to track which service is hovered
  const [activeService, setActiveService] = useState('ardha');
  
  // Images for each yoga pose
  const yogaImages = {
    ardha: 'pic.jpg',
    baddha: 'banner.jpg',
    ashtanga: 'yellow1.jpg'
  };
  
  // Services data
  const services = [
    {
      id: 'ardha',
      title: 'Ardha Chakrasana',
      trainer: 'DJ YOGA TRAINER',
    },
    {
      id: 'baddha',
      title: 'Baddha Konasana',
      trainer: 'MANTRA YOGA TRAINER',
    },
    {
      id: 'ashtanga',
      title: 'Ashtanga Namaskara',
      trainer: 'DJ YOGA TRAINER',
    },
  ];

  return (
    <Container fluid className="yoga-services-container-fluid mt-5" >
      <div className="service-badge">OUR SERVICES</div>
      <hr></hr>
      <Row className="header-row">
        <Col md={6}>
          <h1 className="services-heading" style={{paddingRight:"200px"}}>Our main services</h1>
        </Col>
        <Col md={6} className="text-md-end mt-3" style={{paddingLeft:"500px"}}>
          <Button variant="outline-light" className="read-more-button">
            READ MORE <ArrowRight className="ms-2" />
          </Button>
        </Col>
      </Row>
      
      <Row className="content-row">
        <Col lg={6} md={12} className="image-col">
          <div className="image-container">
            <img 
              src={yogaImages[activeService]} 
              alt={`${activeService} yoga pose`} 
              className="yoga-image"
            />
          </div>
        </Col>
        
        <Col lg={6} md={12} className="services-list-col">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`service-item ${activeService === service.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveService(service.id)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="trainer-badge">
                    <span className="trainer-dot"></span>
                    {service.trainer}
                  </div>
                  <h2 className="service-title">{service.title}</h2>
                </div>
                <div className="arrow-circle">
                  <ArrowRight className="arrow-icon" />
                </div>
              </div>
              <hr className="service-divider" />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default AboutYogaServices;