import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    return (
        //Características del componente
        <div>
            <nav>
                <input type={'checkbox'} id="chk-menu" />
                <label for="chk-menu" className="btn-menu">
                    <i className="fa-solid fa-bars"></i>
                </label>
                <div className="items">
                    <Link to="/Acercade" className="item">Acerca de</Link>
                    <hr className="line-nav" />
                    <Link to="/Personalizados" className="item">Productos personalizados</Link>
                    <hr class="line-nav" />
                    <Link to="/Contacto" className="item">Contacto</Link>
                </div>
            </nav>
            <hr />
        </div>
    );
}
export default Navbar;