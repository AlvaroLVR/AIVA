import React from 'react';
import { Link } from 'react-router-dom';

export default function Item(props) {

  const prod = props.datos;

  /* CARD */
  
  return (
    <>
      <div id='divCard' className="card m-2 align-items-center shadow-lg"  style={{width: '16rem', height: 'auto'}}>
        <img className=" card-img-top" src={prod.image} style={{width: '11rem', }} />
        <div className="card-body d-flex flex-column justify-content-end text-center">
          <h5 className="card-title"><b>{`${prod.title}`} </b></h5>
          <p className="card-text">{`${prod.category}`}</p>
          <Link to={`/detalles/${prod.id}`} className="btn btn-dark" > Detalles </Link>
        </div>
      </div>
    </>
  )
} 