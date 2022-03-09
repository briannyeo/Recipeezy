import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import chefHat from "../../images/chef.png";
import { Outlet, Link } from "react-router-dom";
import "./NavbarBootstrap.css";

export default function NavbarBootstrap() {
  return (
    <Navbar sticky="top" fixed="top" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className="brand" href="/Recipeezy">
          <img className="navbarimg" src={chefHat} alt="chefhat" />
          Recipeezy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/Recipeezy/about">How to Use</Link>
            <Link to="/Recipeezy/plannedmeals">Planned Meals</Link>
            <Link to="/Recipeezy/grocerylist">Grocery List</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Outlet />
    </Navbar>
  );
}
