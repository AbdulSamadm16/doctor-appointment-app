import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setRole }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("role");
   setRole(null);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div className="container">

        <span className="navbar-brand">
          🏥 Doctor Appointment
        </span>

        <div className="ms-auto">
          <button
            className="btn btn-light btn-sm"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;