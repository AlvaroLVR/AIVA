import { createContext } from "react";
import { useState } from "react";

export const cartContext = createContext([])

const CartContextProvider = ({children}) =>{

    const [carList,setCartList] = useState([])

    const addCart = (prod) =>{
        setCartList(...prod)

        console.log(carList);
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