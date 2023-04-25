import React from "react"
const CartContext = React.createContext(
    {
        productlist: [],
        cartOpen: false,
        setCartOpen: () => { },
        orderList: [],
        setOrderList: () => { },
        isSignIn: false,
        signInModalVisibility: false,
        setSignInModalVisibility: () => { }
    }
)

export default CartContext;