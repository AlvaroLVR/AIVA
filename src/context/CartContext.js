import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) =>{

    const [carList,setCartList] = useState([])
    
    const redondeo = (num) =>{
        const numBack = (Math.round(num*100))/100
        return numBack
    }
    
    const addCart = (prod) => {
        
        setCartList([ ...carList ,prod])
    }
    
    const precioTotalSinIVA = () => {
        return redondeo(carList.reduce((acum, prod) => acum + (prod.cantidad * prod.price) , 0))
    }
    const precioTotalConIVA = () => {
        const iva = 0.21
        const total = precioTotalSinIVA()
        return redondeo((total + (total*iva)))
    }

    const removeItem = (id) => {
        setCartList( carList.filter(item => item.id !== id) )
    }

    const cleanCart = ()=>{
        setCartList([])
    }


    return(
        <CartContext.Provider value={{
            carList,
            addCart,
            precioTotalSinIVA,
            precioTotalConIVA,
            removeItem,
            cleanCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider