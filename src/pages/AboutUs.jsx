import React from "react";
import "../styles/AboutUs.css"; 
import aboutImage from '../assets/665.webp';


const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Title Section */}
      <section className="about-title-section">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">
          We’re on a mission to make learning accessible, engaging, and powerful for everyone.
        </p>
      </section>

      {/* Image Section */}
      <section className="about-image-section">
        <img
          src={aboutImage}
          alt="Our Team"
          className="about-image"
        />
      </section>

      {/* Mission Section */}
      <section className="about-mission-section">
        <h2 className="about-mission-title">Our Mission</h2>
        <p className="about-mission-text">
          We believe education is the most powerful weapon you can use to change the world. Our platform is built for dreamers, doers, and lifelong learners who want to grow with every click. Whether you're brushing up on basics or diving into advanced topics, we're here to support you at every stage of your journey.
        </p>
      </section>

      {/* Core Values Section */}
      {/* <section className="about-values-section">
        <h2 className="about-values-title">Our Core Values</h2>
        <div className="about-values-list">
          <div className="about-value-item">
            <h3 className="about-value-title">Vision</h3>
            <p className="about-value-text">
              At Vruksha Academy, our vision is to redefine the landscape of early
childhood education by cultivating a generation of reflective,
compassionate, and professionally skilled educators. We strive to foster a
deep and meaningful understanding of the teaching profession—one that
recognizes the developmental, emotional, and intellectual needs of young
learners. Our commitment is to
“Understanding the World of Teaching”
a world where educators are nurtured to become facilitators of curiosity,
confidence, creativity, and character in every child they guide.
            </p>
          </div>
          <div className="about-value-item">
            <h3 className="about-value-title">Inclusivity</h3>
            <p className="about-value-text">
              We strive to make education accessible and welcoming for everyone, everywhere.
            </p>
          </div>
          <div className="about-value-item">
            <h3 className="about-value-title">Excellence</h3>
            <p className="about-value-text">
              We are committed to the highest standards of content, design, and user experience.
            </p>
          </div>
          <div className="about-value-item">
            <h3 className="about-value-title">Growth</h3>
            <p className="about-value-text">
              We support continuous learning, feedback, and development—for users and ourselves.
            </p>
          </div>
        </div>
      </section> */}
      <section className="about-values-section">
  <h2 className="about-values-title">Our Core Values</h2>

  <div className="about-values-layout">
    {/* Left side - Vision */}
    <div className="about-values-left">
      <div className="about-value-item">
        <h3 className="about-value-title">Vision</h3>
        <p className="about-value-text">
          At Vruksha Academy, our vision is to redefine the landscape of early childhood education by cultivating a generation of reflective, compassionate, and professionally skilled educators. We strive to foster a deep and meaningful understanding of the teaching profession—one that recognizes the developmental, emotional, and intellectual needs of young learners. Our commitment is to “Understanding the World of Teaching”—a world where educators are nurtured to become facilitators of curiosity, confidence, creativity, and character in every child they guide.
        </p>
      </div>
    </div>

    {/* Right side - Inclusivity & Growth */}
    <div className="about-values-right">
      <div className="about-value-item">
        <h3 className="about-value-title">Mission</h3>
        <p className="about-value-text">
          Our mission is to transform teacher training by equipping educators with modern, research-based methods. We foster inclusive, ethical, and child-centered learning, inspiring teachers to become empathetic, innovative, and socially responsible change-makers.
        </p>
      </div>

      <div className="about-value-item">
        <h3 className="about-value-title">Growth</h3>
        <p className="about-value-text">
          We champion continuous learning and professional development in teacher training. Our approach encourages educators to embrace feedback, refine their skills, and grow into confident, reflective, and adaptive teaching professionals.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default AboutUs;
