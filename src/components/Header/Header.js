import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    // <Navbar className="mt-5 mb-5" bg="info" variant="dark">
    //   <Container>
    //     <Nav className="me-auto flex-md-row">
    //       <Link to="/">Home</Link>
    //       <Link to="/mission">Mission</Link>
    //       <Link to="/vision">Vision</Link>
    //       <Link to="/aboutus">About Us</Link>
    //       <Link to="/contact">Contact</Link>
    //       <Link to="/login">Login</Link>
    //       <Link to="/register">Register</Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand d-none" to="/">
          Future Tech Soft - IT
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/mission">Mission</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/vision">Vision</Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
