import React from 'react'

export default function TableCart(carList) {
    console.log(carList.prod,'estas en tablecart');
  return (
    <>
        {
            carList.prod.map(prod => 
            <tr key={prod.id}>
                <th scope="col">{prod.id}</th>
                <td scope="col">{prod.title}</td>
                <td scope="col" align='center' >{prod.cantidad}</td>
                <td scope="col" align='center' ><button className='btn btn-dark'><b>#</b></button></td>
            </tr>)
        }
    </>
  )
}