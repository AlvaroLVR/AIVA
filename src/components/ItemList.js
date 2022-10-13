import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

export default function ItemList(props) {

  /* aca va la lista de productos. utilizando MAP */
  /* const users = props */
  console.log(props);

  return (
    <>
      {/* <div className="tarjeta bg-light border rounded-2 m-4 p-2 text-center" >
        <img src={props.datos.image} className='card-img-top' />
        <div className="card-body">
          <p className="card-text" id="tarjeta-nombre"><b>{`${props.datos.title}`} </b></p>
          <p className="card-text" id="tarjeta-precio">{`${props.datos.description}`}</p>
        </div>
        <Link to={`${props.datos.id}`} >
          <button className='btn btn-dark' onClick={<Item detalles={props.id}/>}>Detalles</button>
        </Link> 
      </div> */}

      <div className="card m-2 p-2 align-items-center "  style={{width: '15rem'}}>
        <img className=" card-img-top" src={props.datos.image} style={{width: '11rem'}} />
        <div className="card-body d-flex flex-column justify-content-end text-center">
          <h5 className="card-title"><b>{`${props.datos.title}`} </b></h5>
          <p className="card-text">{`${props.datos.category}`}</p>
          <Link to={`${props.datos.id}`} >
            <a className="btn btn-dark">Detalles</a>
          </Link>  
        </div>
      </div>
      

    </>
  )
}
