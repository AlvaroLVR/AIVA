import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import { toast } from 'react-toastify'

export default function ItemCount({onAdd}) {
  const [itemCant,setItemAdd] = useState(1)

  const notify = () => toast.success('se agrego al carrito!', {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "dark",
  })

  const errorCart = () => toast.error('no agregaste un producto al carrito', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
    })

  function seteoAgregar(notificacion){
    if (itemCant == 0 ) {
      errorCart() 
    } else {
      notificacion ? notify() : notificacion = false
      onAdd(itemCant)
    }
  }

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
      <div className='d-flex flex-row justify-content-center  rounded-2 p-2 my-1' >
        <button className='btn bg-success text-white me-2' onClick={()=>operacion(true)}>+</button>
        <button className='btn bg-success text-white me-2' onClick={()=>operacion(false)}>-</button>
        <span className='bg-dark text-white rounded-2 p-2' ><b>{itemCant}</b></span>
      </div>
      <button className='btn btn-success fs-5' onClick={()=>seteoAgregar(true)}>Agregar al carrito</button>
    </>
  )
}