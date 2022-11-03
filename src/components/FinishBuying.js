import React from 'react'
import { useCartContext } from '../context/CartContext'

export default function FinishBuying() {
  const {carList} = useCartContext()
  return (
    <div className='container-fluid'>
      <h1 className='text-center'>Estas en finalizar compra</h1>
      <div className='container bg-light m-3 rounded-2' style={{height: '100vh'}}>
        <div className='row'>
          <div className='col-8'>
            <div className='rounded-3 bg-success'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}