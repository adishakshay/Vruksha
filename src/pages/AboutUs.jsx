import React from "react";
import "../styles/AboutUs.css";
import aboutImage from "../assets/665.webp";

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

      {/* Team Section */}
      <section className="about-team-section">
        <h2 className="about-team-title">Meet Our Team</h2>
        <div className="about-team-members">
          <div className="about-team-card">
            <div className="about-team-avatar avatar-ceo"></div>
            <h3 className="about-team-name">Poornima Venugopal</h3>
            <p className="about-team-role">CEO & Founder</p>
            <p className="about-team-bio">
              I'm Poornima, the founder of Vruksha Academy. My passion lies in nurturing early childhood educators who can truly understand and inspire the young minds they guide. I believe in creating a world where teaching is respected, empowered, and deeply impactful.
            </p>
          </div>

          <div className="about-team-card">
            <div className="about-team-avatar avatar-cofounder"></div>
            <h3 className="about-team-name">Venugopal</h3>
            <p className="about-team-role">Co-Founder</p>
            <p className="about-team-bio">
              I’m Venugopal, Co-Founder of Vruksha Academy. I focus on building a strong foundation and long-term vision for our institution. I’m committed to ensuring our values guide every step of our journey in redefining education.
            </p>
          </div>

          <div className="about-team-card">
            <div className="about-team-avatar avatar-dev"></div>
            <h3 className="about-team-name">Adish A</h3>
            <p className="about-team-role">Full Stack Alchemist</p>
            <p className="about-team-bio">
              I'm Adish, the Full Stack Developer behind this platform. My goal is to create seamless, engaging user experiences that reflect our values and make learning intuitive and enjoyable for every visitor.
            </p>
          </div>
        </div>
      </section>
      {/* Core Values Section */}
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

          {/* Right side - Mission & Growth */}
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
