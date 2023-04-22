import React,{ useState } from "react";
import CartContext from "./components/Context/CartContext";
import StorePage from "./components/Pages/Store";
import AboutPage from "./components/Pages/About";
import HomePage from "./components/Pages/Home";
import ContactUs from "./components/Pages/ContactUs";

import { Route ,Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import CartContainer from "./components/Cart/CartContainer";



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
      <Routes>
      <Route path = '/'  element={<HomePage/>}/>
      <Route path = '/store'  element={<StorePage/>}/>
      <Route path = '/about'  element={<AboutPage/>}/>
      <Route path = '/contact'  element={<ContactUs/>}/>
      </Routes>
      {cartOpen && <CartContainer></CartContainer>}
      </CartContext.Provider>
    </div>
  );
}

export default App;