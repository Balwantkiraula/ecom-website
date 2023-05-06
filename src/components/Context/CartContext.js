import React from "react"
const CartContext = React.createContext(
    {
        productlist: [],
        cartOpen: false,
        setCartOpen: () => { },
        orderList: [],
        setOrderList: () => { },
        idToken:'',
        setIdToken:()=>{},
        isLogedIn:false,
        setIsLogedIn:()=>{},    
        signInModalVisibility: false,
        setSignInModalVisibility: () => { },
        userid:'',
        setUserId: () => { }
    }
)

export default CartContext;