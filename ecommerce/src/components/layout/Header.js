import React from "react";
import "./Header.css";
import {
  Container,
  Nav,
  Navbar,
  Row,
  Col,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Cart from "../cart/Cart";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "80px" }}>
        <Container>
          <Navbar.Brand>
            <Link to={"/"}>Best4U </Link>
          </Navbar.Brand>
          <Link to={"store"}>Store</Link>
          <Link to={"about"}>About</Link>
          <Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="success">
                <FaShoppingCart
                  color="white"
                  fontSize={"25px"}
                ></FaShoppingCart>
                <Badge color="white">5</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 370 }}>
                <Cart></Cart>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
