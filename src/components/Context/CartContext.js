import React from "react"
const CartContext = React.createContext(
    {
        cartOpen: false,
        setCartOpen: () => { },
        orderList: [],
        setOrderList: () => { }
    }
)

export default CartContext;