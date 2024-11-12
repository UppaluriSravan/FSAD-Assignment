import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreateBook = () => {
  const [name, setName] = useState("");
  const [condition, setCondition] = useState("");
  const [author, setAuthor] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:3000/api/books",
        {name, condition, author, contact},
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

  return (
    <div
      style={{
        width: "800px", // increased width
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
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
            style={{
              width: "95%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
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
            style={{
              width: "95%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
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
            style={{
              width: "95%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
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
            style={{
              width: "95%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
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
            backgroundColor: "#007BFF",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Create Book
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
