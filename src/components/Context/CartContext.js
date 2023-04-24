import React from "react"
const CartContext = React.createContext(
    {
        productlist:[],
        cartOpen: false,
        setCartOpen: () => { },
        orderList: [],
        setOrderList: () => { }
    }
)

export default CartContext;