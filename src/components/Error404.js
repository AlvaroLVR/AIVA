import React from 'react'
import logo from '../img/logoMenu.svg'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div className='d-flex flex-column text-center bg-black justify-content-center' style={{height: '100vh'}}>
        <img src={logo} style={{height: '40vh'}} alt=''/>
        <p className='text-white fs-5'>Es posible que el enlace esté roto o no exista. Verifica que este bien escrita.</p>
        <p className='text-white fs-4'>Página no encontrada. <br/> <Link className='btn btn-light text-black fs-4' to={'/'}><b>Ir al Inicio</b></Link></p>
    </div>
  )
}
