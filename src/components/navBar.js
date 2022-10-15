import React from 'react'
import logoMenu from '../img/logoMenu.svg'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () =>{

    return <>

        <nav className="navbar navbar-expand-lg py-0 bg-dark">
        
            <div className="container">
                
                <Link className="navbar-brand header-logo" to={'/'}> 
                    <img style={{height: '30px'}} className='svg' src={logoMenu} /> 
                </Link> 
                
                
                <button className="navbar-toggler m-3 bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className="offcanvas offcanvas-end bg-dark" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">

                    <div className="offcanvas-header ">
                        <a className="navbar-brand header-logo" >
                            <Link to={'/'}>
                            <img className='svg' style={{height: '30px'}} src={logoMenu} />
                            </Link> 
                        </a>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body justify-content-center bg-dark">
                        <div className="navbar container-fluid bg-dark">
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
                                    <Link to={'/categoria/importados'} className="nav-link text-light fs-6" >Importados</Link> 
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
                                    <Link to={'/carrito'}  className="nav-link text-light fs-6" > <CartWidget/> </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
};
