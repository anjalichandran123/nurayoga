import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FitnessBenefitsCards.css';

const FitnessBenefitsCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const benefitsData = [
    {
      id: 1,
      number: '01',
      title: 'Protection From Injury',
      image: 'pic.jpg',
      description: 'Regular exercise strengthens muscles and joints, reducing the risk of injuries in daily activities.'
    },
    {
      id: 2,
      number: '02',
      title: 'Weight Reduction',
      image: 'pic.jpg',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.'
    },
    {
      id: 3,
      number: '03',
      title: 'Increased Flexibility',
      image: 'pic.jpg',
      description: 'Improve your range of motion and reduce muscle tension with our specialized flexibility programs.'
    }
  ];

  return (
    <Container fluid className="benefits-container py-5" style={{backgroundColor:"#e9edf5"}}>
      <Row className="g-4">
        {benefitsData.map((benefit) => (
          <Col key={benefit.id} lg={4} md={6} xs={12}>
            <div 
              className="benefit-card"
              onMouseEnter={() => setHoveredCard(benefit.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="image-container">
                <img 
                  src={benefit.image} 
                  alt={benefit.title} 
                  className="benefit-image"
                />
                <div className={`overlay ${hoveredCard === benefit.id ? 'active' : ''}`}>
                  <p className="benefit-description">
                    {benefit.description}
                  </p>
                </div>
                <div className="number-title-container">
                  <span className="benefit-number">{benefit.number}</span>
                  <h3 className="benefit-title">{benefit.title}</h3>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FitnessBenefitsCards;