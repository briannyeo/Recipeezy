import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Recipeezy from "../../images/logo2.png";
import { Link } from "react-router-dom";
import "./NavBar.css";
import SearchBarBS from "../SearchBar/SearchBarBS";

export default function NavBar() {
  return (
    <Navbar className="navbar" sticky="top" bg="li" expand="md">
      <Container fluid>
        <Link to="/Recipeezy">
          <Navbar.Brand className="brand">
            <img src={Recipeezy} alt="chefhat" style={{ height: "3.5em" }} />
            {/* <img className="navbarimg" src={chefHat} alt="chefhat" />
            <div style={{ fontFamily: "Lobster", fontSize: "1.6em" }}>
              Recipeezy
            </div> */}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 ">
            <div className="navbarlinks">
              <Link to="/Recipeezy/about">
                <span>HOW TO USE</span>
              </Link>
              <Link to="/Recipeezy/plannedmeals">
                <span>PLANNED MEALS</span>
              </Link>
              <Link to="/Recipeezy/grocerylist">
                <span>GROCERY LIST</span>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        <SearchBarBS />
      </Container>
    </Navbar>
  );
}
