import React from 'react'
import Item from './Item';

export default function ItemList(props) {
  console.log('ITEM LIST renderizado');
  return (
    <>
      {/* aca va la lista de productos. utilizando MAP */}

      <div className="tarjeta bg-light border rounded-2 m-4" >
        {/* <img src={'#'} className="card-img-top" /> */}
        <div className="card-body">
          <p className="card-text" id="tarjeta-nombre"><b>titulo</b></p>
          <p className="card-text" id="tarjeta-precio">$999</p>
        </div>
      </div>
    </>
  )
}
