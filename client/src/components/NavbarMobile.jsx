import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import logo from "../assets/logo.svg"; // Import the logo

const NavbarMobile = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 1000,
  };

  const menuStyle = {
    display: isOpen ? "block" : "none",
    backgroundColor: "#4CAF50",
    position: "absolute",
    top: "60px",
    left: 0,
    right: 0,
    zIndex: 999,
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    padding: "10px 15px",
    display: "block",
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
    padding: "10px 20px",
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
        <button onClick={toggleMenu} style={buttonStyle}>
          ☰
        </button>
      </div>
      <div style={menuStyle}>
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
      </div>
    </nav>
  );
};

export default NavbarMobile;
