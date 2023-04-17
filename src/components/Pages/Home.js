import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeProduct from "../HomeComponent/HomeProducts";
import Header from "../Header/Header";

const HomePage = () => {
  return (
    <Container>
      <Header />
      <header
        style={{
          textAlign: "center",
          backgroundColor: "#bf00ff",
          color: "whitesmoke",
          borderRadius: "10px",
          fontFamily: "cursive",
        }}
      >
        <Row className="my-4">
          <Col>
            <h1>Welcome to Our E-commerce Store</h1>
            <h4>
              Explore our wide range of products and find the perfect fit for
              your needs.
            </h4>
          </Col>
        </Row>
      </header>
      <Row>
        <HomeProduct></HomeProduct>
        <HomeProduct></HomeProduct>
        <HomeProduct></HomeProduct>
      </Row>
    </Container>
  );
};

export default HomePage;