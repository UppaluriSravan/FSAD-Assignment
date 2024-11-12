import React, {useEffect, useState} from "react";
import axios from "axios";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;
  console.log(books);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/books/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MzBmMGQ5NmVlYzk1NTAzNDI0Y2ZkZiIsImlhdCI6MTczMTI2MDY0MSwiZXhwIjoxNzMxODY1NDQxfQ.kG5M_BBV_htEhX5d8524Q0q0EB3PJeDXEctwIepbb1w`,
        },
      })
      .then((response) => setBooks(response.data.data.books))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleContactClick = (contact) => {
    window.open(`https://wa.me/${contact}`, "_blank");
  };

  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{padding: "20px"}}>
      <h1 style={{textAlign: "center", marginBottom: "20px"}}>All Books</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          boxSizing: "border-box",
        }}
      />
      <table
        style={{
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
          borderCollapse: "collapse",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          tableLayout: "fixed",
        }}
      >
        <thead>
          <tr style={{backgroundColor: "#444"}}>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
                width: "15%",
              }}
            >
              Title
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
                width: "15%",
              }}
            >
              Author
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
                width: "15%",
              }}
            >
              Condition
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
                width: "15%",
              }}
            >
              Contact
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
                width: "15%",
              }}
            >
              Genre
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
                width: "15%",
              }}
            >
              Location
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                textAlign: "center",
                width: "15%",
              }}
            >
              Availability
            </th>
          </tr>
        </thead>
        <tbody>
          {currentBooks.map((book, index) => (
            <tr
              key={book._id}
              style={{backgroundColor: index % 2 === 0 ? "#333" : "#555"}}
            >
              <td style={{border: "1px solid #ddd", padding: "12px"}}>
                {book.name}
              </td>
              <td style={{border: "1px solid #ddd", padding: "12px"}}>
                {book.author}
              </td>
              <td style={{border: "1px solid #ddd", padding: "12px"}}>
                {book.condition}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  cursor: "pointer",
                  color: "white",
                }}
                onClick={() => handleContactClick(book.contact)}
              >
                {book.contact}
              </td>
              <td style={{border: "1px solid #ddd", padding: "12px"}}>
                {book.genre}
              </td>
              <td style={{border: "1px solid #ddd", padding: "12px"}}>
                {book.location}
              </td>
              <td style={{border: "1px solid #ddd", padding: "12px"}}>
                {book.availabilityStatus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{textAlign: "center", marginTop: "20px"}}>
        {Array.from({length: totalPages}, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            style={{
              margin: "0 5px",
              padding: "10px 15px",
              cursor: "pointer",
              backgroundColor: currentPage === index + 1 ? "#444" : "#888",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
