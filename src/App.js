import { useState } from "react";
import CartContext from "./components/Context/CartContext";
import StorePage from "./components/Pages/Store";
import AboutPage from "./components/Pages/About";
import HomePage from "./components/Pages/Home";
import ContactUs from "./components/Pages/ContactUs";

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import CartContainer from "./components/Cart/CartContainer";
import ProductDetails from "./components/Pages/ProductDetails";
import SignUpModal from "./components/AuthForm/SignUpModal";
import ProfilePage from "./components/Pages/ProfilePage";



function App() {
  const userIdToken = localStorage.getItem('idToken') ? localStorage.getItem('idToken') : '';
  const userLogedIn = userIdToken === '' ? false : true;
  const [cartOpen, setCartOpen] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [signInModalVisibility, setSignInModalVisibility] = useState(false);
  const [idToken, setIdToken] = useState(userIdToken);
  const [isLogedIn, setIsLogedIn] = useState(userLogedIn)

  const ctxObj = {
    cartOpen: cartOpen,
    setCartOpen: setCartOpen,
    orderList: orderList,
    setOrderList: setOrderList,
    isLogedIn: isLogedIn,
    setIsLogedIn: setIsLogedIn,
    idToken: idToken,
    setIdToken: setIdToken,
    signInModalVisibility: signInModalVisibility,
    setSignInModalVisibility: setSignInModalVisibility

  };

  return (
    <div>
      <CartContext.Provider value={ctxObj}>
        <SignUpModal></SignUpModal>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/store' element={<StorePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='user/:userID' element={<ProfilePage />} />
          <Route path='/products/:productID' element={<ProductDetails />} />
        </Routes>
        {cartOpen && <CartContainer></CartContainer>}
      </CartContext.Provider>
    </div>
  );
}

export default App;