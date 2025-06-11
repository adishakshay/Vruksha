import React from "react";
import "../styles/Courses.css";

const courseList = [
  "BSS DIPLOMA IN MONTESSORI AND CHILD EDUCATION",
  "BSS DIPLOMA IN EARLY CHILDHOOD CARE AND EDUCATION",
  "DIPLOMA IN PRE-SCHOOL AND PRIMARY EDUCATION (DPPE)",
  "BSS DIPLOMA IN CRECHE AND PRE-SCHOOL MANAGEMENT",
  "BSS ADVANCED DIPLOMA IN MONTESSORI AND CHILD EDUCATION",
  "ADVANCED DIPLOMA IN MONTESSORI, KINDERGARTEN & NURSERY EDUCATION",
  "BSS DIPLOMA IN ART AND CRAFT",
  "CERTIFICATE IN ADVANCED ABACUS TRAINING COURSE",
  "CERTIFICATE IN PHONICS TEACHER TRAINING",
  "BSS ADVANCED DIPLOMA IN MONTESSORI AND GRADE LEVEL EDUCATION",
  "B.Ed., (Open & Distance Education)",
  "M.Ed., (Open & Distance Education)"
];

const Courses = () => {
  return (
    <section className="courses-container">
      <h2 className="courses-title">Our Courses</h2>
      <ul className="courses-list">
        {courseList.map((course, index) => (
          <li key={index} className="course-item" data-aos="fade-up">
            {course}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Courses;
