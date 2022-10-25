import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { cartContext } from '../context/CartContext';

/* componente principal */
export default function ItemCount(props) {

  const {addCart,carList} = useContext(cartContext)
  const [opciones,setOpciones] = useState(true)
  const [notificacion, setNotificacion] = useState(false)
  const [itemCant,setItemAdd] = useState(0)

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

  ////////////////////////////////////

  function operacion(a){
    if (itemCant>=0) {
      a ? setItemAdd(itemCant+1) : setItemAdd(itemCant-1)    
    }
  }
  
  if (itemCant<0) {
    setItemAdd(0)
  }


  function seteoAgregar(opciones,notificacion,prod){
    opciones ? setOpciones(false) : setOpciones(true)
    notificacion ? notify() : setNotificacion(false)

    console.log(prod,'esto se envia de itemCount');
    addCart( prod, itemCant )
  }
  
  return (
    <>
      <div className='d-flex flex-row justify-content-center bg-light rounded-2 p-2 my-2' >
        <Link className='btn bg-success text-white me-2' onClick={()=>operacion(true)}>+</Link>
        <Link className='btn bg-success text-white me-2' onClick={()=>operacion(false)}>-</Link>
        <span className='bg-dark text-white rounded-2 p-2' ><b>{itemCant}</b></span>
      </div>
      {
        opciones ? 
        <Link className='btn bg-black text-white fs-5 d-flex justify-content-center' onClick={()=>{seteoAgregar(true,true,props.prod)}}>agregar al carrito </Link> 
        :
        <Link to='/'  className='btn text-white fs-5 d-flex justify-content-center bg-success shadow-lg' >seguir comprando</Link>
      }
      
    </>
  )
}