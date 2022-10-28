import React from 'react'
import {useCartContext} from '../context/CartContext'
import TableCart from './TableCart'
import { Link } from 'react-router-dom'

export default function Cart() {
  const {carList,precioTotalSinIVA,precioTotalConIVA,cleanCart} = useCartContext()

  console.log(carList.length,'este es el largo de carList');
  return (
    <div className='container-fluid bg-light'>
      <div className='row d-flex flex-wrap'>
          {/* agregar una tabla con los productos agregados al carrito.
          - quitar producto
          - lista de contacto: Email - verificacion de Email, Telefono. */}
          <div className='col-md-8 col-sm-12'>
            <table className="table table-hover">
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
                {/* logica para agregar productos */}
                {carList.length == 0 ? 
                  <tr> 
                   <td align="center" colSpan={'4'} ><b>el carrito está vacio</b></td>
                  </tr>
                  :
                  <TableCart prod={carList}/> 
                }
              </tbody>
            </table>
          </div>
        <div className='col-md-4 col-sm-12 bg-light text-center'>
          <div className='d-flex flex-column justify-content-around m-2 rounded-1 border p-2 bg-white'>
            {
              carList.length == 0 ? 
              <Link to={'/'} className='btn btn-success fs-5'><b>Ir a comprar</b></Link>
              :
              <>
                <div className=' mb-2 fs-5'><p>Total sin IVA:  <b>{precioTotalSinIVA()}</b></p> </div>
                <div className=' mb-2 fs-5'><p> IVA: <b>21%</b></p></div>
                <div className=' mb-2 fs-5'><p> Total con IVA: <b className='bg-dark rounded-2 p-1 text-white'>{precioTotalConIVA()} </b>  </p></div>
                <button className='btn btn-dark'>Terminar compra</button>
                <button className='btn btn-danger mt-2' onClick={()=>cleanCart()}>Limpiar Carrito</button>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
