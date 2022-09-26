import logoMenu from '../img/logoMenu.svg'

export const NavBar = () =>{
    return <>
        <div className="header container-fluid navbar sticky-top bg-dark navbar-expand-lg ">
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <a className="navbar-brand header-logo" href="#">
                <img className='svg' src={logoMenu} />
            </a>
        
            <div  className="collapse navbar-collapse header-lista" id="navbarTogglerDemo03">
                
                <ul id="header-list-left" className="navbar-nav  mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link text-light fs-6" href="#">Hombres</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light fs-6" href="#">Mujeres</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light fs-6" href="#">Accesorios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light fs-6" href="#">Importados</a>
                    </li>
                </ul>
                
                <ul id="header-list-right" className="navbar-nav  mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link text-light fs-6" href="#">Sobre nosotros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light fs-6" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light fs-6" href="#">
                                carrito
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </>
};