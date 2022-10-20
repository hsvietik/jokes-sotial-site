import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
          <Nav.Link className="nav-btn view" to="/viewpost">
            View Jokes
          </Nav.Link>
          <Nav.Link className="nav-btn add" to="/">
            Add Joke
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
