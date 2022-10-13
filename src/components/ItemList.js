import React from 'react';
import Item from './Item';

export default function ItemList(props) {

  /* aca va la lista de productos. utilizando MAP */
  /* const users = props */
  console.log(props);

  return (
    <>
      <div className="tarjeta bg-light border rounded-2 m-4 p-2 text-center" >
        <div className="card-body">
          <p className="card-text" id="tarjeta-nombre"><b>{`${props.datos.name}`} </b></p>
          <p className="card-text" id="tarjeta-precio">{`${props.datos.username}`}</p>
        </div>
        <button className='btn btn-dark' onClick={<Item/>}>Detalles</button>
      </div>
    </>
  )
}
