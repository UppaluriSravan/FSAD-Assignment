import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import AllBooks from "./components/AllBooks";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import CreateBook from "./components/CreateBook";
import ExistingBooks from "./components/ExistingBooks";
import SignUp from "./components/SignUp";
import ModifyAccount from "./components/ModifyAccount"; // Import the ModifyAccount component
import "./App.css";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginOrSignUpRoute =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!isLoginOrSignUpRoute && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/create" element={<CreateBook />} />
        <Route path="/update" element={<ExistingBooks />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/modify-account"
          element={<ModifyAccount userId={localStorage.getItem("userId")} />}
        />{" "}
        {/* Add this line */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
