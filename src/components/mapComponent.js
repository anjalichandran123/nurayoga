import React, { useEffect, useRef } from 'react';
import './MapComponent.css'; // Import the CSS file for styling

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Function to initialize the map
    const initializeMap = () => {
      const google = window.google;
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 51.5034, lng: -0.1193 }, // London Eye coordinates
        zoom: 10,
      });

      // Create a marker
      new google.maps.Marker({
        position: { lat: 51.5034, lng: -0.1193 },
        map: map,
        title: 'lastminute.com London Eye',
      });
    };

    // Load the Google Maps API script dynamically
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAMOydLIyisII1IlJ50jlsurS_b1m3gY8c&callback=initMap`;
      script.defer = true;
      script.async = true;
      script.onload = initializeMap;
      document.body.appendChild(script);
    } else {
      initializeMap();
    }
  }, []);

  return (
    <div className="container mt-5 mb-5" ref={mapRef} style={{ height: '500px', width: '100%',borderRadius:"30px" }}></div>
  );
};

export default MapComponent;
