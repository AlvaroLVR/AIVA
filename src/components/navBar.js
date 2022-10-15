import React from 'react'
import logoMenu from '../img/logoMenu.svg'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () =>{

    return <>
        <div className="header container-fluid navbar sticky-top bg-dark navbar-expand-lg ">
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <a className="navbar-brand header-logo" >
                <Link to={'/'}>
                <img className='svg' src={logoMenu} />
                </Link> 
            </a>
        
            <div  className="collapse navbar-collapse header-lista " id="navbarTogglerDemo03">
                
                <ul id="header-list-left" className="navbar-nav mb-lg-0">
                    <li className="nav-item">
                        <Link to={'/categoria/hombres'} className="nav-link text-light fs-6" >Hombres</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/categoria/mujeres'} className="nav-link text-light fs-6" >Mujeres</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/categoria/accesorios'} className="nav-link text-light fs-6" >Accesorios</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/categoria/hombres'} className="nav-link text-light fs-6" >Importados</Link> 
                    </li>
                </ul>
                
                <ul id="header-list-right" className="navbar-nav mb-lg-0">
                    <li className="nav-item">
                        <Link to={'/sobrenosotros'} className="nav-link text-light fs-6" >Sobre nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/blog'} className="nav-link text-light fs-6" >Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/carrito'} className="nav-link text-light fs-6" > <CartWidget/> </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
};
