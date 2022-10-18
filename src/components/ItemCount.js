import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
/* componente secundario */

function OnAdd() {
  const [opciones,setOpciones] = useState(true)
  
  return (
    <>
      {
        opciones ? 
        <Link  className='btn bg-black text-white fs-5 d-flex justify-content-center' onClick={()=>{setOpciones(false)}}>agregar al carrito </Link> 
        :
        <Link  className='btn text-white fs-5 d-flex justify-content-center bg-success' onClick={()=>{setOpciones(true)}}>seguir comprando</Link> 
      }
    </>
  )
}

/* componente principal */
export default function ItemCount() {
  const {id} = useParams();
  const [itemAdd,setItem] = useState(0)

  return (
    <>
      <div className='d-flex flex-row justify-content-center align-items-baseline ' >
        <Link className='btn bg-success text-white mx-2 '  >+</Link>
        <Link className='btn bg-success text-white mx-2 '  >-</Link>
        <p className='bg-light rounded-2 p-2'> <b>{itemAdd}</b></p>
      </div>

      <OnAdd/>

    </>
  )
}