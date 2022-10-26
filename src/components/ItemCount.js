import React from 'react'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { cartContext } from '../context/CartContext';
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useContext } from 'react'



/* componente principal */
export default function ItemCount(props) {

  const {addCart} = useContext(cartContext)

  const [itemCant,setItemAdd] = useState(0)
  const [opciones,setOpciones] = useState(true)
  const [notificacion, setNotificacion] = useState(false)

  const {setCartList, carList} = useContext(cartContext)

  const notify = () => toast.success('se agrego al carrito!', {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "dark",
  });

  function seteoAgregar(opciones,notificacion,prod){
    opciones ? setOpciones(false) : setOpciones(true)
    notificacion ? notify() : setNotificacion(false)
    
    setCartList({id:1, name:'hola'})

  }
  

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
      {
        opciones ? 
        <button className='btn bg-black text-white fs-5 d-flex justify-content-center' onClick={()=>{seteoAgregar(true,true,props.prod)}}>agregar al carrito </button> 
        :
        <Link to='/'  className='btn text-white fs-5 d-flex justify-content-center bg-success shadow-lg' >seguir comprando</Link>
      }
    </>
  )
}