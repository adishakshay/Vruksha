// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Login.css";

// const Login = ({ setIsLoggedIn }) => {
//   const [role, setRole] = useState("user");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const storedUser = JSON.parse(localStorage.getItem("userData"));

//     if (
//       storedUser &&
//       storedUser.email === email &&
//       storedUser.password === password
//     ) {
//       alert(`Login successful as ${role}`);
//       console.log("Login successful:", role);

//       // Clear fields
//       setEmail("");
//       setPassword("");

//       // Update login status
//       setIsLoggedIn(true);

//       // Redirect to home
//       navigate("/");
//     } else {
//       alert("Invalid credentials");
//       console.log("Login failed");
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2 className="login-title">Login to Your Account</h2>

//         <select
//           className="login-input"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//         >
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>

//         <input
//           type="email"
//           placeholder="Email"
//           className="login-input"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="login-input"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit" className="login-button">Login</button>

//         <p className="login-text">
//           Don’t have an account? <a href="/signup" className="login-link">Sign up</a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;
