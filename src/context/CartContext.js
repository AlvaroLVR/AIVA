import { createContext, useContext } from "react";
import { useState } from "react";

export const cartContext = createContext([])

const CartContextProvider = ({children}) =>{

    const [carList,setCartList] = useState({})

    const addCart = (prod) =>{
        console.log(carList, 'esto recibe cartContext');
        setCartList(prod)
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