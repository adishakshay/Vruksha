import React from "react";
import "../styles/Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-form">
        <h2 className="register-title">Register for a Course</h2>
        {/* <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc2MvM2gIibTXEZXO_0xHwKnQLi40bLN2u9oWJ0nx9KAXdWPw/viewform"
            className="register-iframe"
            allowFullScreen
            loading="lazy"
        ></iframe> */}
        <div className="register-iframe-wrapper">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSc2MvM2gIibTXEZXO_0xHwKnQLi40bLN2u9oWJ0nx9KAXdWPw/viewform?embedded=true"
                className="register-iframe"
                allowFullScreen
                loading="lazy">
                Loading…
            </iframe>
            <p className="register-warning">
                If the form doesn't load, please <a href="https://forms.gle/hcPrr3LXz9eVZvYLA" target="_blank">click here</a>.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
