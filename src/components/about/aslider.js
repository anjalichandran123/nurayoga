import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import '../../css/TestimonialSlider.css';

const testimonials = [
  {
    id: 1,
    name: "Maria Flynn",
    role: "SATISFIED CLIENT",
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. They are great to work with and are excellent trainers.. Thank you all!",
    avatar: "pic.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    role: "REGULAR MEMBER",
    text: "I would recommend practitioners at this center to everyone!  great to work with and are jbhjftyfgyhduihiweojdas excellent trainers. Thank you all!",
    avatar: "banner.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "FITNESS ENTHUSIAST",
    text: "I would recommend practitioners to everyone! They are great to work with and are excellent trainers. Thank you all!",
    avatar: "yellow1.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Arun Smith",
    role: "REGULAR MEMBER",
    text: "I would recommend practitioners at this center to everyone! They are great to work fythfgyhuj with and are excellent trainers. Thank you all!",
    avatar: "yellow1.jpg",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-container">
      <div className="testimonial-card">
        {/* Image Section */}
        <div className="image-section">
          <img
            src="pic.jpg"
            alt="Yoga pose"
            className="testimonial-image"
          />
        </div>

        {/* Testimonial Section */}
        <div className="content-section">
          <div className="badge-container">
            <span className="testimonial-badge">
              TESTIMONIAL
            </span>
          </div>
          <hr className="divider" />
          <h2 className="section-title">
            Clients feedback
          </h2>

          <div className="testimonial-content">
            <div className="testimonial-rating">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="star-icon"
                />
              ))}
            </div>

            <p className="testimonial-text">
              {testimonials[currentIndex].text}
            </p>
            
            <div className="profile-section">
              <div className="profile-container">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="profile-image"
                />
                <div className="profile-info">
                  <h4 className="profile-name">{testimonials[currentIndex].name}</h4>
                  <p className="profile-role">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="navigation-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`dot ${index === currentIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;