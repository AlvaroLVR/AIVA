import { createContext, useContext } from "react";
import { useState } from "react";

export const cartContext = createContext([])

const CartContextProvider = ({children}) =>{

    const [carList,setCartList] = useState([])
    const [cantidad,setCantidad] = useState(0)

    const addCart = (prod,cant) =>{
        cant<0 ? setCantidad(0) : setCartList(...prod,cantidad)    
    }


    return(
        <cartContext.Provider value={{
            cantidad,
            carList,
            addCart
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider