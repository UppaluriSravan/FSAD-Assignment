import React from "react";
import {Link, useNavigate} from "react-router-dom";
import logo from "../assets/logo.svg"; // Import the logo

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "fixed", // Make the navbar fixed to the top
    top: 0,
    left: 0, // Ensure the navbar starts from the left edge
    right: 0, // Ensure the navbar ends at the right edge
    width: "100%", // Set the width to be the same as the All Books component
    zIndex: 1000, // Ensure the navbar is above other content
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  };

  const linkHoverStyle = {
    backgroundColor: "#45a049",
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    margin: "10px 60px",
    padding: "10px 40px", // Adjusted padding
    borderRadius: "5px",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "red",
  };

  return (
    <nav style={navStyle}>
      <div style={{display: "flex", alignItems: "center"}}>
        <img
          src={logo}
          alt="Logo"
          style={{width: "40px", height: "40px", marginRight: "10px"}}
        />
        <Link
          to="/books"
          style={linkStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              linkHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          All Books
        </Link>
        <Link
          to="/create"
          style={linkStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              linkHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          Create New Book
        </Link>
        <Link
          to="/update"
          style={linkStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              linkHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          Update Existing Book
        </Link>
        <Link
          to="/modify-account"
          style={linkStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              linkHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          Modify Account
        </Link>
        {/* Remove the Delete Existing Books link */}
        {/* <Link
          to="/delete"
          style={linkStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              linkHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          Delete Existing Books
        </Link> */}
      </div>
      <button
        onClick={handleLogout}
        style={buttonStyle}
        onMouseOver={(e) =>
          (e.currentTarget.style.backgroundColor =
            buttonHoverStyle.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.backgroundColor = "transparent")
        }
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
