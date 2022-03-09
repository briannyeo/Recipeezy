import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import chefHat from "../../images/chef.png";
import { Outlet, Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <Navbar sticky="top" fixed="top" bg="light" expand="md">
      <Container fluid>
        <Link to="/Recipeezy">
          <Navbar.Brand className="brand">
            <img className="navbarimg" src={chefHat} alt="chefhat" />
            Recipeezy
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 ">
            <div className="navbarlinks">
              <Link to="/Recipeezy/about">
                <span>How to Use</span>
              </Link>
              <Link to="/Recipeezy/plannedmeals">
                <span>Planned Meals</span>
              </Link>
              <Link to="/Recipeezy/grocerylist">
                <span>Grocery List</span>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
