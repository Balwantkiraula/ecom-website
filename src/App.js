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
import { useEffect } from "react";

async function getUserCart(localId) {
  const response = await fetch(`https://crudcrud.com/api/35a88bc91d3247f8a56ccdef4c7421f1/cart/${localId}.json`);
  const result = await response.json();
  console.log(result)
  return result;
}

async function updateUserCart(localId, data) {
  const response = await fetch(`https://crudcrud.com/api/35a88bc91d3247f8a56ccdef4c7421f1/cart/${localId}.json`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}


function App() {
  const userIdToken = localStorage.getItem('idToken') ? localStorage.getItem('idToken') : null;
  const userLogedIn = !!userIdToken;
  const userLocalId = localStorage.getItem('userid') ? localStorage.getItem('userid') : null;
  const [cartOpen, setCartOpen] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const [signInModalVisibility, setSignInModalVisibility] = useState(false);
  const [idToken, setIdToken] = useState(userIdToken);
  const [isLogedIn, setIsLogedIn] = useState(userLogedIn)
  const [userid, setUserId] = useState(userLocalId)
  // const[loginStateTimer, setLoginStateTimer] = useState(isLogedIn) ;
  useEffect(() => {
    if (isLogedIn) {
      setTimeout(() => {
        localStorage.setItem('idToken', '')
      }, 1 * 60 * 1000)
      // return clearTimeout(timer);
    }
  }, [isLogedIn])

  if (userid && orderList.length !== 0) {
    updateUserCart(userid, orderList)
  }

  useEffect(() => {
    getUserCart(userid).then(data => { if (data) { setOrderList(data) } })
  }, [userid])

  console.log("effect running")


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
    setSignInModalVisibility: setSignInModalVisibility,
    userid: userid,
    setUserId: setUserId
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
          <Route path='/products/:productID/:idToken' element={<ProductDetails />} />
        </Routes>
        {cartOpen && <CartContainer></CartContainer>}
      </CartContext.Provider>
    </div>
  );
}

export default App;