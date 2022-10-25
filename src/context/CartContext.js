import { createContext, useContext } from "react";
import { useState } from "react";

export const cartContext = createContext([])

const CartContextProvider = ({children}) =>{

    const [carList,setCartList] = useState({})
    const [cantidad,setCartCantidad] = useState(0)

    function addCart (prod,cant){
        setCartList({...prod})
        setCartCantidad(cant)
        console.log(carList, 'esto recibe cartContext',cantidad);
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