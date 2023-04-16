import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import ProductList from "../Products/ProductList";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import CartContainer from "../Cart/CartContainer";

const StorePage = () => {
  const ctx = useContext(CartContext);
  return (
    <div>
      <Header />
      <Container>
        <ProductList />
      </Container>
      {ctx.cartOpen && <CartContainer />}
    </div>
  );
};

export default StorePage;