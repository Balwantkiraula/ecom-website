import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import CartContext from "../Context/CartContext";

const Header = () => {
  
  const ctx = useContext(CartContext);
  const orderlist = ctx.orderList;
  let cartItemCount = 0;
  orderlist.forEach(item => {
    cartItemCount += item.quantity
  })
  return (
    <Navbar bg="success" expand="lg" className="justify-content-between">
      <Container>
        <Navbar.Brand href="#home">Our Ecommerce Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Button variant="outline-warning" onClick={()=>ctx.setCartOpen(true)}>{`My Cart ${cartItemCount}`}</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;