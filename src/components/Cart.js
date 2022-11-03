import React from 'react'
import {useCartContext} from '../context/CartContext'
import TableCart from './TableCart'
import { Link } from 'react-router-dom'
import compra from '../img/bag-svgrepo-com.svg'

export default function Cart() {
  const {carList,precioTotalSinIVA,precioTotalConIVA,cleanCart} = useCartContext()

  return (
    <div className='container bg-light rounded-2' style={{height: '100vh'}}>
      <div className='row d-flex flex-wrap'>
        <div className='col-md-8 col-sm-12'>
          <table className="table table-hover">
            {
              carList.length === 0 ?
                <thead>
                  <tr>
                    <th scope='col' colSpan={'5'} className='text-center fs-5'  style={{alignSelf: 'self-end'}} >Carrito vacio</th>
                  </tr>
                </thead>
              :
              <>
                <thead className="table-light ">
                  <tr>
                    {/* cabecera */}
                    <th scope="col" className='text-start'>id</th>
                    <th scope="col" className='text-start'>Producto</th>
                    <th scope="col" className='text-center'>Cantidad</th>
                    <th scope="col" className='text-center'>Quitar</th>
                    <th scope="col" className='text-center'>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  <TableCart prod={carList}/> 
                </tbody>
              </>
            }
          </table>
        </div>
        <div className='col-md-4 col-sm-12 bg-light text-center'>
          <div className='d-flex flex-column justify-content-around m-2 rounded-1 border p-2 bg-white'>
            {
              carList.length === 0 ? 
              <Link to={'/'} className='btn btn-success fs-5'>Ir a comprar <img className='ms-2' src={compra} alt='' style={{height:'24px'}} /></Link>
              :
              <>
                <div className=' mb-2 fs-5'><p>Total sin IVA:  <b>{precioTotalSinIVA()}</b></p> </div>
                <div className=' mb-2 fs-5'><p> IVA: <b>21%</b></p></div>
                <div className=' mb-2 fs-5'><p> Total con IVA: <b className='bg-light rounded-2 p-1 text-black'>{precioTotalConIVA()} </b>  </p></div>
                <Link to={'/FinishBuy'} className='btn btn-success'>Terminar compra</Link>
                <button className='btn btn-danger mt-2' onClick={()=>cleanCart()}>Limpiar Carrito</button>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
