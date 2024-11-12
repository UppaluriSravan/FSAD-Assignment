import React, {useEffect, useState} from "react";
import axios from "axios";

const ExistingBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingBook, setEditingBook] = useState(null);
  const [updatedDetails, setUpdatedDetails] = useState({
    name: "",
    author: "",
    condition: "",
    contact: "",
  });

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const token = localStorage.getItem("token"); // Adjust the token retrieval as needed
        const userId = localStorage.getItem("userId"); // Assuming userId is stored in localStorage
        const response = await axios.get("http://localhost:3000/api/books", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userBooks = response.data.data.books.filter(
          (book) => book.user === userId
        );
        setBooks(userBooks);
        console.log(response, "books", userBooks, editingBook, books);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const handleEdit = (book) => {
    setEditingBook(book);
    setUpdatedDetails({
      name: book.name,
      author: book.author,
      condition: book.condition,
      contact: book.contact,
    });
  };
  console.log("books", editingBook, books);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:3000/api/books/${editingBook._id}`,
        updatedDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book._id === editingBook._id ? {...book, ...updatedDetails} : book
        )
      );
      setEditingBook(null);
      setUpdatedDetails({
        name: "",
        author: "",
        condition: "",
        contact: "",
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (bookId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:3000/api/books/${bookId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{maxWidth: "800px", margin: "0 auto", padding: "20px"}}>
      <h1 style={{textAlign: "center", marginBottom: "20px", color: "#333"}}>
        Your Books
      </h1>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "0",
          justifyContent: "center",
        }}
      >
        {books.map((book) => (
          <li
            key={book._id}
            style={{
              width: "calc(100% - 40px)",
              maxWidth: "400px",
              boxSizing: "border-box",
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              color: "#333",
            }}
          >
            {editingBook && editingBook._id === book._id ? (
              <>
                <input
                  type="text"
                  value={updatedDetails.name}
                  onChange={(e) =>
                    setUpdatedDetails({...updatedDetails, name: e.target.value})
                  }
                  style={{
                    width: "calc(100% - 20px)",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    backgroundColor: "#f5e6d3",
                    color: "#5d4037",
                  }}
                />
                <input
                  type="text"
                  value={updatedDetails.author}
                  onChange={(e) =>
                    setUpdatedDetails({
                      ...updatedDetails,
                      author: e.target.value,
                    })
                  }
                  style={{
                    width: "calc(100% - 20px)",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    backgroundColor: "#f5e6d3",
                    color: "#5d4037",
                  }}
                />
                <input
                  type="text"
                  value={updatedDetails.condition}
                  onChange={(e) =>
                    setUpdatedDetails({
                      ...updatedDetails,
                      condition: e.target.value,
                    })
                  }
                  style={{
                    width: "calc(100% - 20px)",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    backgroundColor: "#f5e6d3",
                    color: "#5d4037",
                  }}
                />
                <input
                  type="text"
                  value={updatedDetails.contact}
                  onChange={(e) =>
                    setUpdatedDetails({
                      ...updatedDetails,
                      contact: e.target.value,
                    })
                  }
                  style={{
                    width: "calc(100% - 20px)",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    backgroundColor: "#f5e6d3",
                    color: "#5d4037",
                  }}
                />
                <div style={{display: "flex", justifyContent: "space-between"}}>
                  <button
                    onClick={handleUpdate}
                    style={{
                      padding: "10px 20px",
                      borderRadius: "5px",
                      border: "none",
                      backgroundColor: "#007BFF",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => setEditingBook(null)}
                    style={{
                      padding: "10px 20px",
                      borderRadius: "5px",
                      border: "none",
                      backgroundColor: "#6c757d",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <p>
                  <strong>Title:</strong> {book.name}
                </p>
                <p>
                  <strong>Author:</strong> {book.author}
                </p>
                <p>
                  <strong>Condition:</strong> {book.condition}
                </p>
                <p>
                  <strong>Contact:</strong> {book.contact}
                </p>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                  <button
                    onClick={() => handleEdit(book)}
                    style={{
                      padding: "10px 20px",
                      borderRadius: "5px",
                      border: "none",
                      backgroundColor: "#007BFF",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(book._id)}
                    style={{
                      padding: "10px 20px",
                      borderRadius: "5px",
                      border: "none",
                      backgroundColor: "#dc3545",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExistingBooks;
