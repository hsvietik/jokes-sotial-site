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
        <Navbar.Brand href="/">
          {" "}
          <img
            className="logo"
            src={require("./Joke-logo.png")}
            alt={"Joke logo"}
          />{" "}
        </Navbar.Brand>
        <Nav className="nav-buttons">
          <Link to="/" className="nav-btn view">
            View Jokes
          </Link>
          <Link to="/addpost" className="nav-btn add">
            Add Jokes
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
