import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="container">
      <ul className="nav-links">
        <Link to="/" className="list">
          <i class="bi bi-house-door-fill"></i>Home
        </Link>
        <Link to="/About" className="list">
          <i class="bi bi-file-person-fill"></i>About
        </Link>
        <Link to="/Dashboard" className="list">
          <i class="bi bi-speedometer"></i>Dashboard
        </Link>
        <Link to="/task" className="list">
          <i class="bi bi-file-person-fill"></i>Task</Link>
      </ul>
    </div>
  );
}

export default Navbar