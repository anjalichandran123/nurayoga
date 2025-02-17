import React from 'react';

const YogaServices = () => {
  const styles = {
    serviceSection: {
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      position: 'relative',  // Set relative positioning for the section
    },
    sectionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    serviceTag: {
      background: '#f5f5f5',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '14px',
      color: '#333',
      position: 'absolute',
      top: '0',
      left: '0',
      textDecoration: 'none',
      paddingRight:"12px"
    },
    sectionTitle: {
      fontSize: '48px',
      fontWeight: 600,
      color: '#1a1a1a',
      margin: '20px 0',
      paddingRight:"800px"
      
    },
    navButtons: {
      display: 'flex',
      gap: '10px',
      position: 'absolute',  // Position the buttons absolutely within the section
      top: '20px',  // Position from the top
      right: '20px',  // Position from the right
    },
    navButton: {
      width: '40px',
      height: '40px',
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      background: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    servicesGrid: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'space-between',
    },
    serviceCard: {
      background: 'white',
      padding: '30px',
      borderRadius: '12px',
      position: 'relative',
      width: 'calc(25% - 20px)',  // Increased card width
    },
    trainerType: {
      color: '#2F855A',
      fontSize: '14px',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    trainerDot: {
      width: '8px',
      height: '8px',
      background: '#2F855A',
      borderRadius: '50%',
      display: 'inline-block',
    },
    poseName: {
      fontSize: '24px',
      fontWeight: 600,
      color: '#1a1a1a',
      margin: '10px 0 20px 0',
    },
    poseIcon: {
      margin: '20px 0',
      height: '80px',
    },
    arrowLink: {
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      width: '40px',
      height: '40px',
      background: '#f5f5f5',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

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

  return (
    <div>
        <br></br>
    <section style={styles.serviceSection}>
      <div style={styles.sectionHeader}>
        <div>
          <span style={styles.serviceTag}>SERVICE</span>
          <br></br>
          <hr style={{width:"1200px"}}></hr>
          <h2 style={styles.sectionTitle}>Our main services</h2>
        </div>
        <div style={styles.navButtons}>
          <button style={styles.navButton}>←</button>
          <button style={styles.navButton}>→</button>
        </div>
      </div>

      <div style={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} style={styles.serviceCard}>
            <div style={styles.trainerType}>
              <span style={styles.trainerDot}></span>
              {service.type}
            </div>
            <h3 style={styles.poseName}>
              {service.name.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i === 0 && <br />}
                </React.Fragment>
              ))}
            </h3>
            <svg style={styles.poseIcon} viewBox="0 0 100 100">
              <path d={service.svgPath} fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <div style={styles.arrowLink}>↗</div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default YogaServices;
