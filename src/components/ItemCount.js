import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { cartContext } from '../context/CartContext';

/* componente principal */
export default function ItemCount() {

  const {addCart} = useContext(cartContext)

  const [itemCant,setItemAdd] = useState(0)

  ////////////////////////////////////

  function operacion(a){
    if (itemCant>=0) {
      a ? setItemAdd(itemCant+1) : setItemAdd(itemCant-1)    
    }
  }
  
  if (itemCant<0) {
    setItemAdd(0)
  }

  
  return (
    <>
      <div className='d-flex flex-row justify-content-center bg-light rounded-2 p-2 my-2' >
        <button className='btn bg-success text-white me-2' onClick={()=>operacion(true)}>+</button>
        <button className='btn bg-success text-white me-2' onClick={()=>operacion(false)}>-</button>
        <span className='bg-dark text-white rounded-2 p-2' ><b>{itemCant}</b></span>
      </div>
      
    </>
  )
}