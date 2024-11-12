import React, {useState} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/signup", {
        username,
        email,
        password,
      });
      console.log("userId", response.data.data.user._id);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.data.user._id); // Store userId in localStorage
      navigate("/books");
    } catch (err) {
      setError("Failed to create account");
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #8B4513", // Brown border
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#F5F5DC", // Beige background
      }}
    >
      <h2 style={{textAlign: "center", marginBottom: "20px", color: "#556B2F"}}>
        Sign Up
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: "15px"}}>
          <label
            style={{display: "block", marginBottom: "5px", color: "#8B4513"}}
          >
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #8B4513", // Brown border
              backgroundColor: "#FFF8DC", // Cornsilk background
              boxSizing: "border-box", // Ensure the input field stays within its parent
              color: "#8B4513", // Dark brown text
              fontWeight: "bold", // Bold text
              fontSize: "16px", // Increase text size
            }}
          />
        </div>
        <div style={{marginBottom: "15px"}}>
          <label
            style={{display: "block", marginBottom: "5px", color: "#8B4513"}}
          >
            Username:
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #8B4513", // Brown border
              backgroundColor: "#FFF8DC", // Cornsilk background
              boxSizing: "border-box", // Ensure the input field stays within its parent
              color: "#8B4513", // Dark brown text
              fontWeight: "bold", // Bold text
              fontSize: "16px", // Increase text size
            }}
          />
        </div>
        <div style={{marginBottom: "15px"}}>
          <label
            style={{display: "block", marginBottom: "5px", color: "#8B4513"}}
          >
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #8B4513", // Brown border
              backgroundColor: "#FFF8DC", // Cornsilk background
              boxSizing: "border-box", // Ensure the input field stays within its parent
              color: "#8B4513", // Dark brown text
              fontWeight: "bold", // Bold text
              fontSize: "16px", // Increase text size
            }}
          />
        </div>
        {error && <p style={{color: "red", textAlign: "center"}}>{error}</p>}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#556B2F", // Dark olive green background
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>
      <p style={{textAlign: "center", marginTop: "10px"}}>
        Already have an account?{" "}
        <Link to="/login" style={{color: "#556B2F"}}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
