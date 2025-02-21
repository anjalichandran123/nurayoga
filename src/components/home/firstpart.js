import React from 'react';
import styled from 'styled-components';

const ServiceSection = styled.section`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: system-ui, -apple-system, sans-serif;
  position: relative;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const ServiceTag = styled.span`
  background: #f5f5f5;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 14px;
  color: #333;
  position: absolute;
  top: 0;
  left: 0;
  text-decoration: none;
  padding-right: 12px;

  @media (max-width: 768px) {
    position: static;
    margin-bottom: 10px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 20px 0;
  padding-right: 800px;

  @media (max-width: 768px) {
    font-size: 32px;
    padding-right: 0;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 20px;
  right: 20px;

  @media (max-width: 768px) {
    position: static;
    margin-top: 10px;
  }
`;

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ServicesGrid = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ServiceCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  position: relative;
  width: calc(25% - 20px);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const TrainerType = styled.div`
  color: #2f855a;
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TrainerDot = styled.span`
  width: 8px;
  height: 8px;
  background: #2f855a;
  border-radius: 50%;
  display: inline-block;
`;

const PoseName = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 10px 0 20px 0;
`;

const PoseIcon = styled.svg`
  margin: 20px 0;
  height: 80px;
`;

const ArrowLink = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const services = [
  {
    type: 'DJ YOGA TRAINER',
    name: 'Ardha\nChakrasana',
    svgPath: 'M50 20c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zM30 60c0 11 9 20 20 20s20-9 20-20H30z',
  },
  {
    type: 'MANTRA YOGA TRAINER',
    name: 'Baddha\nKonasana',
    svgPath: 'M30 40c0 11 9 20 20 20s20-9 20-20M40 70l10-10 10 10',
  },
  {
    type: 'DJ YOGA TRAINER',
    name: 'Ashtanga\nNamaskara',
    svgPath: 'M20 50c0 16.6 13.4 30 30 30s30-13.4 30-30-13.4-30-30-30-30 13.4-30 30z',
  },
  {
    type: 'ASHTANGA YOGA TRAINER',
    name: 'Urdhva\nHastasana',
    svgPath: 'M50 20v60M30 40l20-20 20 20',
  },
];

const YogaServices = () => {
  return (
    <div>
      <br />
      <ServiceSection>
        <SectionHeader>
          <div>
            <ServiceTag>SERVICE</ServiceTag>
            <br />
            <hr style={{ width: "1200px" }} />
            <SectionTitle>Our main services</SectionTitle>
          </div>
          <NavButtons>
            <NavButton>←</NavButton>
            <NavButton>→</NavButton>
          </NavButtons>
        </SectionHeader>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <TrainerType>
                <TrainerDot />
                {service.type}
              </TrainerType>
              <PoseName>
                {service.name.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i === 0 && <br />}
                  </React.Fragment>
                ))}
              </PoseName>
              <PoseIcon viewBox="0 0 100 100">
                <path d={service.svgPath} fill="none" stroke="currentColor" strokeWidth="2" />
              </PoseIcon>
              <ArrowLink>↗</ArrowLink>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServiceSection>
    </div>
  );
};

export default YogaServices;