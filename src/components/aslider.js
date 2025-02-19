import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

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
    <div className="w-full max-w-xl mx-auto container mt-5">
      <div
        className="bg-white rounded-lg overflow-hidden row"
        style={{ height: "600px", borderRadius: "50px" }}
      >
        {/* Image Section */}
        <div
          className=" col-6 relative h-[400px] w-full"
          style={{ paddingLeft: ".5px", backgroundColor: "#E5C466" }}
        >
          <img
            src="pic.jpg"
            alt="Yoga pose"
            className=" object-cover"
            style={{ height: "600px", width: "650px", borderRadius: "50px" }}
          />
        </div>

        {/* Testimonial Section */}
        <div
          className="col-6 p-8 bg-amber-200"
          style={{ backgroundColor: "#E5C466" }}
        >
          <div className="mb-4 mt-5" style={{ paddingRight: "430px" }}>
            <span
              className="inline-block px-4 py-1 bg-white rounded-full text-sm font-semibold"
              style={{ borderRadius: "30px" }}
            >
              TESTIMONIAL
            </span>
          </div>
          <hr style={{ color: "white", borderWidth: "2px" }}></hr>
          <h2
            className="text-5xl font-bold mb-6"
            style={{ color: "white", fontSize: "50px", paddingRight: "200px" }}
          >
            Clients feedback
          </h2>

          <div className="relative">
            <div className="transition-all duration-500 ease-in-out mt-5">
              <div className="flex mb-3">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                    style={{ color: "white" }}
                  />
                ))}
              </div>

              <p className="text-lg mb-4" style={{ fontSize: "25px" }}>
                {testimonials[currentIndex].text}
              </p>
              <div className="row">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full"
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "50px",
                    }}
                  />
                  <div>
                    <h4 className="font-semibold">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-teal-600 w-6" : "bg-teal-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
