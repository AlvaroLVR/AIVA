import { createContext, useContext } from "react";
import { useState } from "react";

export const cartContext = createContext([])

const CartContextProvider = ({children}) =>{

    const [carList,setCartList] = useState([])
    const [cantidad,setCartCantidad] = useState(0)

    const addCart = (prod,cant) =>{
        console.log(carList, 'esto recibe cartContext');
        cant<0 ? setCartCantidad(0) : setCartList([...prod,cant])
        console.log(carList, 'esto se guarda');
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