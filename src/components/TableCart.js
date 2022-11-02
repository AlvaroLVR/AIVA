import React from 'react'
import trash from '../img/trash-can-regular.svg'
import {useCartContext} from '../context/CartContext'

export default function TableCart(carList) {
  const {removeItem} = useCartContext()
  
  return (
    <>
        {
            carList.prod.map(prod => 
            <>
              <tr key={prod.id}>
                <th scope="col">{prod.id}</th>
                <td scope="col">{prod.title}</td>
                <td scope="col" align='center' >{prod.cantidad}</td>
                <td scope="col" align='center' ><button onClick={()=>removeItem(prod.id)} className='btn btn-danger'><img src={trash} alt='' style={{height: '18px'}}  /></button></td>
                <td scope="col" align='center' >{prod.price * prod.cantidad}</td>
              </tr>
            </>
            )
            
        }
    </>
  )
}