import React from 'react'

export default function Footer() {
  return (
    <div className="navbar container-fluid bg-dark footer px-4 ">
            
        <div className="footer-contacto container-fluid row">
            <div className="footer-contacto-formulario col-4 ">
                <div className="mb-3">
                    <h2 className="text-white">Contactanos</h2>
                    <label for="exampleFormControlInput1" className="form-label text-light">Nombre</label>
                    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="nombre"/>
                    <label for="exampleFormControlInput1" className="form-label text-light">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label text-light">Escribí tu comentario</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <div className="col-6 direccion">
                <div className="container-fluid ">
                    <h2 className="text-white">Capital Federal, Argentina</h2>
                    <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210147.39708195272!2d-58.57338577606368!3d-34.615461113759366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses!2sar!4v1663208297391!5m2!1ses!2sar"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> 
                    </iframe>
                    <div className="d-flex flex-column my-3">
                        <a href="#" className="text-white fs-4">+54 9 11 0000 000</a>
                        <a href="#" className="text-white fs-4">aiva-shop@gmail.com</a>
                        <p className="text-white fs-4">Horarios <br/> 
                        Lunes a Viernes: 7 a.m - 21 p.m</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="footer-lista container-fluid row">
            
            <ul className="navbar-nav  mb-lg-0 col-2" id="footer-list-left ">
                <li className="nav-item">
                    <a className="nav-link text-light fs-6 disabled text-muted" href="#">Lorem, ipsum dolor.</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light fs-6" href="#">Lorem, ipsum dolor.</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light fs-6" href="#">Lorem, ipsum dolor.</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light fs-6" href="#">Lorem, ipsum dolor.</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light fs-6" href="#">Lorem, ipsum dolor.</a>
                </li>
            </ul>
            
            <ul className="navbar-nav  mb-lg-0 col-2" id="footer-list-left ">
                <li className="nav-item">
                    <a className="nav-link text-light fs-6 disabled text-muted" href="#">Lorem, ipsum dolor.</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light fs-6" href="#">Lorem, ipsum dolor.</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light fs-6" href="#">Lorem, ipsum dolor.</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light fs-6" href="#">Lorem, ipsum dolor.</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light fs-6" href="#">Lorem, ipsum dolor.</a>
                </li>
            </ul>
            
            <ul className="navbar-nav  mb-lg-0 col-2" id="footer-list-left ">
                <li className="nav-item">
                    <a className="nav-link text-light fs-6 disabled text-muted" href="#">Lorem, ipsum dolor.</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light fs-6" href="#">Lorem, ipsum dolor.</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light fs-6" href="#">Lorem, ipsum dolor.</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light fs-6" href="#">Lorem, ipsum dolor.</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light fs-6" href="#">Lorem, ipsum dolor.</a>
                </li>
            </ul>
           
            <ul className="navbar-nav  mb-lg-0 col-2" id="footer-list-left ">
                <li className="nav-item">
                    <a className="nav-link text-light fs-6 disabled text-muted" href="#">Lorem, ipsum dolor.</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light fs-6" href="#">Lorem, ipsum dolor.</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light fs-6" href="#">Lorem, ipsum dolor.</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light fs-6" href="#">Lorem, ipsum dolor.</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light fs-6" href="#">Lorem, ipsum dolor.</a>
                </li>
            </ul>
            <div className="col-4">
                <label for="exampleFormControlInput1" className="form-label text-light">Newsletter</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    
            </div>
        </div>

    </div>
  )
}