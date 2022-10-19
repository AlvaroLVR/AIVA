import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

/* agregar y quitar al carrito */ 

function Agregar(add){
    const [itemAdd, setItemAdd] = useState(0)
    
    /* console.log(add); */
    return(
        <>
            <p className='bg-light rounded-2 p-2'> <b>{itemAdd}</b></p>
        </>
    )
}

export default function () {
    
    return (
    <>
        <div className='d-flex flex-row justify-content-center align-items-baseline ' >
            <Link className='btn bg-success text-white mx-2 ' >+</Link>
            <Link className='btn bg-success text-white mx-2 ' >-</Link>
            <Agregar/>
        </div>
    </>
    )
}
