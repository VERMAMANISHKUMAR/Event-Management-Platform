import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../assets/styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status when component loads
  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Retrieve token from localStorage
    if (token) {
      setIsLoggedIn(true); // Set login state to true if token exists
    }
  }, [isLoggedIn]);

  // Listen for login changes (updates instantly)
      useEffect(() => {
     const handleStorageChange = () => {
      setIsLoggedIn(!localStorage.getItem("authToken"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [isLoggedIn]);

  // Handle Logout 
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token
    setIsLoggedIn(false); // Update state
    navigate("/signin"); // Redirect to Sign In page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand">
          <h2 style={{ color: "#498BEE" }}>Event Management Platform</h2>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Other menu items */}
          </ul>

          <div className="d-flex align-items-center">
            {isLoggedIn ? (
              <>
                {/* Show Profile and Logout buttons when logged in */}
                <Link className="btn btn-info me-2" to="/profile">
                  Profile
                </Link>
                <button className="btn btn-danger me-2" onClick={handleLogout}>
                  Log Out
                </button>
              </>
            ) : (
              <>
                {/* Show Sign Up and Log In buttons when NOT logged in */}
                <Link className="btn btn-primary me-2" to="/signupform">
                  Sign Up
                </Link>
                <Link className="btn btn-primary me-2" to="/signin">
                  Log In
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
