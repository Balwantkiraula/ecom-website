import { useState } from "react";
import Header from "./components/Header/Header";
import { Container } from "react-bootstrap";
import ProductList from "./components/Products/ProductList";
import CartContainer from "./components/Cart/CartContainer";
import CartContext from "./components/Context/CartContext";

function App() {

  
  const [cartOpen, setCartOpen] = useState(false);
  const [orderList, setOrderList] = useState([]);


  const ctxObj = {
    cartOpen: cartOpen,
    setCartOpen: setCartOpen,
    orderList: orderList,
    setOrderList: setOrderList,
  };


  return (
    <div>
      <CartContext.Provider value={ctxObj}>
        <Header />
        <Container>
          <ProductList></ProductList>
        </Container>
        {cartOpen && <CartContainer></CartContainer>}
      </CartContext.Provider>
    </div>
  );
}

export default App;