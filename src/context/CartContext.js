import { createContext, useContext } from "react";
import { useState } from "react";

export const cartContext = createContext([])

const CartContextProvider = ({children}) =>{

    const [carList,setCartList] = useState({})
    const [cantidad,setCartCantidad] = useState(0)

    const addCart = (prod,cant) =>{
        console.log(prod, 'esto recibe cartContext',cant);
        setCartList({...prod,cant})
        console.log(carList,'esto se guarda');
    }

    return(
        <cartContext.Provider value={{
            carList,
            addCart
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider