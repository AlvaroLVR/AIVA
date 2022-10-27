import React from 'react'
import {useCartContext} from '../context/CartContext'
import { useState } from 'react';
import TableCart from './TableCart'

export default function Cart() {
  const {carList} = useCartContext()
  const [cartEmpty,setCartEmpty] = useState(true)
  
  /* carList.length >= 0 ?  setCartEmpty(true) : setCartEmpty(false) */

  return (
    <div className='container-fluid bg-light'>
      <div className='row'>
          {/* agregar una tabla con los productos agregados al carrito.
          - quitar producto
          - lista de contacto: Email - verificacion de Email, Telefono. */}
          <div className='col-8 '>
            <table className="table table-hover">
              <thead className="table-light ">
                <tr>
                  {/* cabecera */}
                  <th scope="col" className='text-start'>id</th>
                  <th scope="col" className='text-center'>Producto</th>
                  <th scope="col" className='text-center'>Cantidad</th>
                  <th scope="col" className='text-center'>Agregar o Quitar</th>
                </tr>
              </thead>
              <tbody>
                {/* logica para agregar productos */}
                {cartEmpty ? 
                  <tr> 
                    <td align="center" colspan="4" ><b>el carrito está vacio</b></td>
                  </tr>
                  :
                  <TableCart prod={carList}/>
                }
              </tbody>
            </table>
          </div>
        <div className='col-4 bg-dark text-white d-flex flex-column justify-content-evenly text-center'>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
        </div>
      </div>
    </div>
  )
}
