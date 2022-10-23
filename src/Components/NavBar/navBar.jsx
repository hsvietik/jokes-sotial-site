import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./_navBar.scss";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container className="nav-container">
        <Navbar.Brand href="#view">
          {" "}
          <img
            className="logo"
            src={require("./Joke-logo.png")}
            alt={"Joke logo"}
          />{" "}
        </Navbar.Brand>
        <Nav className="nav-buttons">
          <Link to="/viewpost" className="nav-btn view">
            View Jokes
          </Link>
          <Link to="/" className="nav-btn add">
            Add Jokes
          </Link>
          {/* <Nav.Link className="nav-btn view" to="/viewpost">
            View Jokes
          </Nav.Link> */}
          {/* <Nav.Link className="nav-btn add" to="/addpost">
            Add Joke
          </Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
