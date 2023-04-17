import { useState } from "react";
import CartContext from "./components/Context/CartContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StorePage from "./components/Pages/Store";
import AboutPage from "./components/Pages/About";
import HomePage from "./components/Pages/Home";

const router = createBrowserRouter([
  { path: "/", element: <StorePage /> },
  { path: "/About", element: <AboutPage /> },
  { path: "/Home", element: <HomePage />}
]);

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
        <RouterProvider router={router} />
      </CartContext.Provider>
    </div>
  );
}

export default App;