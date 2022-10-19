import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import OnAdd from './OnAdd'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

/* componente secundario */

function AgregarCart(id) {
  const [opciones,setOpciones] = useState(true)
  const [notificacion, setNotificacion] = useState(false)

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

  function seteoAgregar(opciones,notificacion){
    opciones ? setOpciones(false) : setOpciones(true)
    notificacion ? notify() : setNotificacion(false)
  }
  

  return (
    <>
      {
        opciones ? 
        <Link className='btn bg-black text-white fs-5 d-flex justify-content-center' onClick={()=>{seteoAgregar(true,true)}}>agregar al carrito </Link> 
        :
        <Link to='/'  className='btn text-white fs-5 d-flex justify-content-center bg-success'  ><b>seguir comprando</b></Link>
      }
    </>
  )
}

/* componente principal */
export default function ItemCount() {
/*   const {id} = useParams(); */

  return (
    <>
      <OnAdd/>
      <AgregarCart/>
    </>
  )
}