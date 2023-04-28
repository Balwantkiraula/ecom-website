import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";

const Header = () => {

  const ctx = useContext(CartContext);

  const orderlist = ctx.orderList;
  const signIn = ctx.isLogedIn;

  let cartItemCount = 0;
  orderlist.forEach(item => {
    cartItemCount += item.quantity
  })

  const loginLogoutHandler = () => {
    if (ctx.isLogedIn) {
      ctx.setIsLogedIn(false);
      ctx.setIdToken(null);
      ctx.setOrderList([]);
    } else {
      ctx.setSignInModalVisibility(true);
    }
  }

  return (
    <Navbar bg="light" expand="lg" className="justify-content-between">
      <Container>
        <Navbar.Brand href="#home">Our Ecommerce Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link" >Home</Link>
            <Link to="/store" className="nav-link" >Store</Link>
            <Link to="/about" className="nav-link" >About</Link>
            <Link to="/contact" className="nav-link" >Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          {ctx.isLogedIn && <Link to={`/user/${ctx.idToken}`} className="nav-link"> My Profile </Link>}
        </Nav>
        <Nav>
          <Button variant="outline-warning" onClick={loginLogoutHandler} style={{ marginRight: "1rem" }}>{`${signIn ? 'Logout' : 'Login'}`}</Button>
        </Nav>
        <Nav>
          <Button variant="outline-warning" onClick={() => ctx.setCartOpen(true)}>{`My Cart ${cartItemCount}`}</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;