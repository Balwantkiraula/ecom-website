import { Container } from "react-bootstrap";
import ProductList from "../Products/ProductList";
import { useContext } from "react";
import CartContext from "../Context/CartContext";

const StorePage = () => {
  const ctx = useContext(CartContext);
  return (
      <Container>
        <ProductList />
      </Container>
  );
};

export default StorePage;