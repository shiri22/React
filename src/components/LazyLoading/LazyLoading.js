import React from 'react'
import {Link} from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './LazyLoading.css'

const LazyLoading = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link className="nav-link" to="/Home">
              Home
            </Link>
            <Link className="nav-link" to="/Login">
              Login
            </Link>
            <Link className="nav-link" to="/Register">
              Register
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default LazyLoading