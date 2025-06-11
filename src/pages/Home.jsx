import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Home.css";

// Banner and card images
import bannerImg from "../assets/image5.webp";
import cardImg1 from "../assets/image 2.jpeg";
import cardImg2 from "../assets/image 3.png";
import cardImg3 from "../assets/image.png";

// Partner logos (add your images in the assets folder)
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.jpeg";
import partner3 from "../assets/partner3.jpeg";
import partner4 from "../assets/partner4.jpeg";
import partner5 from "../assets/partner5.jpeg";
import partner6 from "../assets/partner6.jpeg";

const Home = () => {
  const [userCount, setUserCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleScroll = () => {
    const counterSection = document.getElementById("counter-section");
    const scrollPosition = window.scrollY + window.innerHeight;

    if (counterSection && scrollPosition > counterSection.offsetTop && !hasAnimated) {
      animateCounter(setUserCount, 50);
      animateCounter(setCourseCount, 10);
      setHasAnimated(true);
    }
  };

  const animateCounter = (setter, targetValue) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < targetValue) {
        count += 2;
        setter(count);
      } else {
        clearInterval(interval);
      }
    }, 30);
  };

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [userCount, courseCount]);

  return (
    <div>
      {/* Partners Section */}
      <section className="home-partners" data-aos="fade-up">
        {/* <h3 className="home-partners-title">Our Trusted Partners</h3> */}
        <div className="home-partners-logos">
          <img src={partner1} alt="Partner 1" className="partner-logo" />
          <img src={partner2} alt="Partner 2" className="partner-logo" />
          <img src={partner3} alt="Partner 3" className="partner-logo" />
          <img src={partner4} alt="Partner 4" className="partner-logo" />
          <img src={partner5} alt="Partner 5" className="partner-logo" />
          <img src={partner6} alt="Partner 6" className="partner-logo" />
        </div>
      </section>

      {/* Hero Section */}
      <section className="home-hero" data-aos="fade-up">
        <h2 className="home-title" data-aos="fade-down">
          Welcome to <span className="home-title-highlight">Vruksha Academy</span>
        </h2>

        <p className="home-subtitle" data-aos="fade-in" data-aos-delay="300">
          Empower your teaching journey with holistic Montessori training rooted in
          Indian values, nature, and a child-centered approach.
        </p>

        <div className="home-buttons" data-aos="zoom-in" data-aos-delay="500">
          <Link to="/courses" className="home-btn-primary">
            Explore Courses
          </Link>
          <Link to="/register" className="home-btn-secondary">
            Join Now
          </Link>
        </div>
      </section>

      {/* Banner */}
      <div className="home-banner-img" data-aos="zoom-in">
        <img src={bannerImg} alt="Montessori Learning" className="banner-image" />
      </div>

      {/* Why Choose Us */}
      <section className="home-why-section">
        <h3 className="home-why-title">Why Choose Us?</h3>
        <div className="home-why-cards">
          <div className="home-card" data-aos="fade-up">
            <img src={cardImg1} alt="Certified" className="card-icon" />
            <h4 className="home-card-title">Certified Programs</h4>
            <p className="home-card-text">
              National & international certification on completion.
            </p>
          </div>
          <div className="home-card" data-aos="fade-up" data-aos-delay="100">
            <img src={cardImg2} alt="Child Centered" className="card-icon" />
            <h4 className="home-card-title">Child-Centered Approach</h4>
            <p className="home-card-text">
              Rooted in the Montessori method with practical learning.
            </p>
          </div>
          <div className="home-card" data-aos="fade-up" data-aos-delay="200">
            <img src={cardImg3} alt="Mentors" className="card-icon" />
            <h4 className="home-card-title">Experienced Mentors</h4>
            <p className="home-card-text">
              Guidance from certified Montessori trainers.
            </p>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section id="counter-section" className="home-counter" data-aos="fade-up">
        <h3 className="home-cta-title" style={{ color: "#f1f5f9" }}>
          Empowering Learners Across the Globe
        </h3>
        <div className="counter-container">
          <div className="counter-item">
            <div className="counter-number">{userCount}+</div>
            <div className="counter-text">Users Enrolled</div>
          </div>
          <div className="counter-item">
            <div className="counter-number">{courseCount + 5}+</div>
            <div className="counter-text">Courses Offered</div>
          </div>
          <div className="counter-item">
            <div className="counter-number">{Math.floor(courseCount)}+</div>
            <div className="counter-text">Expert Instructors</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta" data-aos="fade-up">
        <h3 className="home-cta-title">Ready to Begin Your Journey?</h3>
        <Link to="/register" className="home-cta-btn">
          Register Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
