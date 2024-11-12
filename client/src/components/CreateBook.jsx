import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreateBook = () => {
  const [name, setName] = useState("");
  const [condition, setCondition] = useState("");
  const [author, setAuthor] = useState("");
  const [contact, setContact] = useState("");
  const [genre, setGenre] = useState("");
  const [location, setLocation] = useState("");
  const [availabilityStatus, setAvailabilityStatus] = useState("available");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:3000/api/books",
        {name, condition, author, contact, genre, location, availabilityStatus},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/books");
    } catch (err) {
      setError("Failed to create book");
    }
  };

  const containerStyle = {
    width: "400px",
    margin: "50px auto 0", // added top margin
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    width: "95%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  };

  const responsiveStyle = {
    "@media (max-width: 600px)": {
      containerStyle: {
        width: "100%",
        padding: "10px",
      },
      inputStyle: {
        width: "100%",
        padding: "8px",
      },
      buttonStyle: {
        width: "100%",
        padding: "8px",
      },
    },
  };

  return (
    <div style={{...containerStyle, ...responsiveStyle.containerStyle}}>
      <h2 style={{textAlign: "center"}}>Create New Book</h2>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: "15px"}}>
          <label style={{display: "block", marginBottom: "5px"}}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Name (required)"
            style={{...inputStyle, ...responsiveStyle.inputStyle}}
          />
        </div>
        <div style={{marginBottom: "15px"}}>
          <label style={{display: "block", marginBottom: "5px"}}>
            Condition:
          </label>
          <input
            type="text"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            required
            placeholder="Condition (required)"
            style={{...inputStyle, ...responsiveStyle.inputStyle}}
          />
        </div>
        <div style={{marginBottom: "15px"}}>
          <label style={{display: "block", marginBottom: "5px"}}>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            placeholder="Author (required)"
            style={{...inputStyle, ...responsiveStyle.inputStyle}}
          />
        </div>
        <div style={{marginBottom: "15px"}}>
          <label style={{display: "block", marginBottom: "5px"}}>
            Contact:
          </label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            placeholder="Contact (required)"
            style={{...inputStyle, ...responsiveStyle.inputStyle}}
          />
        </div>
        <div style={{marginBottom: "15px"}}>
          <label style={{display: "block", marginBottom: "5px"}}>Genre:</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
            placeholder="Genre (required)"
            style={{...inputStyle, ...responsiveStyle.inputStyle}}
          />
        </div>
        <div style={{marginBottom: "15px"}}>
          <label style={{display: "block", marginBottom: "5px"}}>
            Location:
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            placeholder="Location (required)"
            style={{...inputStyle, ...responsiveStyle.inputStyle}}
          />
        </div>
        <div style={{marginBottom: "15px"}}>
          <label style={{display: "block", marginBottom: "5px"}}>
            Availability Status:
          </label>
          <select
            value={availabilityStatus}
            onChange={(e) => setAvailabilityStatus(e.target.value)}
            required
            style={{...inputStyle, ...responsiveStyle.inputStyle}}
          >
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
        </div>
        {error && <p style={{color: "red", textAlign: "center"}}>{error}</p>}
        <button
          type="submit"
          style={{...buttonStyle, ...responsiveStyle.buttonStyle}}
        >
          Create Book
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
