import React from 'react';

const Aboutthird = () => {
  const styles = {
    container: {
      width: '100%',
      overflow: 'hidden',
      background: '#e9edf5',
      padding: '20px 0',
    },
    scrollingWrapper: {
      display: 'flex',
      whiteSpace: 'nowrap',
      animation: 'scroll 20s linear infinite',
    },
    textSection: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '70px',
      fontWeight: '300',
      color: '#333',
      marginRight: '20px',
    },
    starIcon: {
      width: '34px',
      height: '34px',
      margin: '0 20px',
      color: '#2F855A',
    }
  };

  // Create keyframes for the scrolling animation
  const keyframes = `
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `;

  // SVG for the star icon
  const StarIcon = () => (
    <svg 
      style={styles.starIcon} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 0l2.5 9h9.5l-7.5 5.5 3 9.5-7.5-5.5-7.5 5.5 3-9.5-7.5-5.5h9.5z"/>
    </svg>
  );

  // Create double content for seamless scrolling
  const content = (
    <>
      <span>Bright Halls</span>
      <StarIcon />
      <span>Changing Rooms</span>
      <StarIcon />
      <span>Lounge cafe</span>
    </>
  );

  return (
    <div class="mt-2" style={styles.container}>
      <style>{keyframes}</style>
      <div style={styles.scrollingWrapper}>
        {/* Duplicate content for seamless loop */}
        <div style={styles.textSection}>{content}</div>
        <div style={styles.textSection}>{content}</div>
        <div style={styles.textSection}>{content}</div>
        <div style={styles.textSection}>{content}</div>
        <div style={styles.textSection}>{content}</div>
      </div>
    </div>
  );
};

export default Aboutthird;