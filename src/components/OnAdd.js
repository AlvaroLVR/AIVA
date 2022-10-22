import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CartContext } from '../context/CartContext'

/* agregar y quitar al carrito */ 

export default function () {
    const [itemAdd, setItemAdd] = useState(0)
    
    const contador = (a,b)=>{


    }


    return (
    <>
        <div className='d-flex flex-row justify-content-center align-items-baseline ' >
            <Link className='btn bg-success text-white mx-2 ' onClick={contador()} >+</Link>
            <Link className='btn bg-success text-white mx-2 ' onClick={contador()}>-</Link>
            <p className='bg-light rounded-2 p-2'> <b>{itemAdd}</b></p>
        </div>
    </>
    )
}
