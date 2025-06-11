// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // import useNavigate
// import "../styles/Signup.css";

// const Signup = () => {
//   const [password, setPassword] = useState("");
//   const [confirmPass, setConfirmPass] = useState("");
//   const navigate = useNavigate(); // initialize navigation

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (password !== confirmPass) {
//       alert("Passwords do not match!");
//       return;
//     }

//     const fullName = e.target[0].value;
//     const email = e.target[1].value;

//     const userData = { fullName, email, password };
//     localStorage.setItem("userData", JSON.stringify(userData));

//     alert("Signup successful!");
//     navigate("/login"); // redirect to login page
//   };

//   return (
//     <div className="signup-container">
//       <form className="signup-form" onSubmit={handleSubmit}>
//         <h2 className="signup-title">Create a New Account</h2>

//         <input type="text" placeholder="Full Name" className="signup-input" required />
//         <input type="email" placeholder="Email" className="signup-input" required />

//         <input
//           type="password"
//           placeholder="Password"
//           className="signup-input"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Confirm Password"
//           className="signup-input"
//           value={confirmPass}
//           onChange={(e) => setConfirmPass(e.target.value)}
//           required
//         />

//         <button type="submit" className="signup-button">Sign Up</button>

//         <p className="signup-text">
//           Already have an account? <a href="/login" className="signup-link">Login</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup;
