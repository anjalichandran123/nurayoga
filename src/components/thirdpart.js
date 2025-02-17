import React from 'react';

const MeditationPractice = () => {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '40px 20px',
      height: '600px',
      backgroundColor: '#fff',
      borderRadius: '20px',
      overflow: 'hidden',
    },
    leftColumn: {
      position: 'relative',
      borderRadius: '15px',
      overflow: 'hidden',
    },
    leftImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '15px',
    },
    rightColumn: {
      overflowY: 'auto',
      paddingRight: '20px',
      scrollBehavior: 'smooth',
      '&::-webkit-scrollbar': {
        width: '6px',
      },
      '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#888',
        borderRadius: '3px',
      },
    },
    title: {
      fontSize: '32px',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '20px',
    },
    description: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#666',
      marginBottom: '30px',
    },
    benefitsList: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginBottom: '30px',
    },
    benefitItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '16px',
      color: '#333',
    },
    checkIcon: {
      color: '#2F855A',
      width: '20px',
      height: '20px',
    },
    groupImage: {
      width: '60%',
      borderRadius: '15px',
      marginTop: '30px',
    }
  };

  const benefits = [
    'Effective exercises',
    'Body condition improving',
    'Mood & feeling control',
    'Self-actualization increase',
    'Attention improves',
    'Learning efficiency improves'
  ];

  const CheckIcon = () => (
    <svg 
      style={styles.checkIcon} 
      viewBox="0 0 20 20" 
      fill="currentColor"
    >
      <path 
        fillRule="evenodd" 
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
        clipRule="evenodd" 
      />
    </svg>
  );

  return (
    <div class="mt-5" style={styles.container}>
      <div style={styles.leftColumn}>
        <img 
          src="pic.jpg"
          alt="Woman meditating outdoors"
          style={styles.leftImage}
        />
      </div>
      
      <div style={styles.rightColumn}>
        <h2 style={styles.title}>Meditation Practice</h2>
        
        <p style={styles.description}>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium 
          doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore.
        </p>

        <div style={styles.benefitsList}>
          {benefits.map((benefit, index) => (
            <div key={index} style={styles.benefitItem}>
              <CheckIcon />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <img 
          src="pic.jpg"
          alt="Group meditation class"
          style={styles.groupImage}
        />
      </div>
    </div>
  );
};

export default MeditationPractice;