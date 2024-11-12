import React, {useState} from "react";
import axios from "axios";

const ModifyAccount = ({userId}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:3000/api/${userId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("User updated successfully");
    } catch (error) {
      alert("Error updating user");
    }
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
  };

  const inputStyle = {
    width: "calc(100% - 22px)", // Adjust width to fit within the parent container
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  const labelStyle = {
    alignSelf: "flex-start",
    marginBottom: "5px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div>
        <label style={labelStyle}>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div>
        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div>
        <label style={labelStyle}>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <button type="submit" style={buttonStyle}>
        Update Account
      </button>
    </form>
  );
};

export default ModifyAccount;
