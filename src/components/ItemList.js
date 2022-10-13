import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

export default function ItemList(props) {

  /* aca va la lista de productos. utilizando MAP */
  /* const users = props */
  console.log(props);

  return (
    <>
      <div className="card m-2 p-2 align-items-center "  style={{width: '15rem'}}>
        <img className=" card-img-top" src={props.datos.image} style={{width: '11rem'}} />
        <div className="card-body d-flex flex-column justify-content-end text-center">
          <h5 className="card-title"><b>{`${props.datos.title}`} </b></h5>
          <p className="card-text">{`${props.datos.category}`}</p>
          <Link to={`/detalles`} >
            <a className="btn btn-dark">Detalles</a>
          </Link>  
        </div>
      </div>
    </>
  )
}