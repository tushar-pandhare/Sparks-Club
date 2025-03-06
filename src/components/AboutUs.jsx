import React, { useState, useEffect } from "react";
import "./Aboutus.css"; // Ensure this CSS file exists in src/pages/

const images = [
  "/logo.png",
  "/3d.jpeg",
  "/logo.png",
  "/3d.jpeg",
]; // Add more images as needed

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-images">
          <img
            src={images[currentIndex]}
            alt="Group"
            className="image slide"
          />
        </div>
        <div className="about-text">
          <h2>About us</h2>
          <p>
            CSE (Scientific Club of ESI) is a student club at the Higher
            National School of Computer Science in Algiers. It's made for
            students who are passionate about computers, high tech, robotics,
            design, and anything related to technology.
          </p>
          <p>
            The CSE has managed to gain its place nationally and internationally
            by organizing major Tech events. After organizing the first
            hackathon and one of the largest in Algeria, the club is considered
            as one of the biggest and most active clubs in the country.
          </p>
        </div>
      </div>
      <div className="shelf"></div>
      <div className="scroll-top">
        <a href="#top">▲</a>
      </div>
    </div>
  );
};

export default AboutUs;
