import React, { useState } from 'react';
import '../../css/YogaPoseGallery.css';

const YogaPoseGallery = () => {
  const [activeCard, setActiveCard] = useState(null);
  
  const yogaPoses = [
    { 
      id: 1, 
      name: "Downward Dog", 
      sanskrit: "Adho Mukha Svanasana",
      imageUrl: "pic.jpg" 
    },
    { 
      id: 2, 
      name: "Tree Pose", 
      sanskrit: "Vrikshasana",
      imageUrl: "pic.jpg" 
    },
    { 
      id: 3, 
      name: "Warrior I", 
      sanskrit: "Virabhadrasana I",
      imageUrl: "pic.jpg" 
    },
    { 
      id: 4, 
      name: "Warrior II", 
      sanskrit: "Virabhadrasana II",
      imageUrl: "pic.jpg" 
    },
    { 
      id: 5, 
      name: "Triangle Pose", 
      sanskrit: "Trikonasana",
      imageUrl: "pic.jpg" 
    },
    { 
      id: 6, 
      name: "Bridge Pose", 
      sanskrit: "Setu Bandhasana",
      imageUrl: "pic.jpg" 
    },
    { 
      id: 7, 
      name: "Cobra Pose", 
      sanskrit: "Bhujangasana",
      imageUrl: "pic.jpg" 
    },
    { 
      id: 8, 
      name: "Child's Pose", 
      sanskrit: "Balasana",
      imageUrl: "pic.jpg" 
    },
    { 
      id: 9, 
      name: "Mountain Pose", 
      sanskrit: "Tadasana",
      imageUrl: "pic.jpg" 
    },
    { 
      id: 10, 
      name: "Lotus Pose", 
      sanskrit: "Padmasana",
      imageUrl: "pic.jpg" 
    },
  ];
  
  const handleCardClick = (id) => {
    setActiveCard(id === activeCard ? null : id);
  };
  
  return (
    <div className="yoga-gallery-container">
      <h1 className="yoga-gallery-title">Yoga Pose Gallery</h1>
      <div className="yoga-gallery-grid">
        {yogaPoses.map((pose) => (
          <div 
            key={pose.id}
            className={`yoga-card ${activeCard === pose.id ? 'yoga-card-active' : ''}`}
            onClick={() => handleCardClick(pose.id)}
          >
            <div className="yoga-card-inner">
              <div className="yoga-card-image">
                <img 
                  src={pose.imageUrl} 
                  alt={pose.name} 
                  className="yoga-pose-img"
                />
              </div>
              <div className="yoga-card-content">
                <h3 className="yoga-card-title">{pose.name}</h3>
                <p className="yoga-card-sanskrit">{pose.sanskrit}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YogaPoseGallery;