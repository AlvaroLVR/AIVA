import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) =>{

    const [carList,setCartList] = useState([])

    /////////////Codigo tutor/////////////////
    const addCart = (prod) => {
        setCartList([ ...carList ,prod])
    }
  

    return(
        <CartContext.Provider value={{
            carList,
            addCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider