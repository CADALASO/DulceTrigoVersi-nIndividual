import React from 'react';
import './Header.css';
import Logo from '../../assets/img/LogoDulceTrigo.svg'
import { Link } from 'react-router-dom';
function Header() {
    return (
        //Características del componente
        <header id="header-container">
            <Link to="/Home"><img src={Logo} alt="Logo dulce trigo" class="logo" /></Link>
            <div class="button-header">
                <h3 class="header-title">“Traemos el dulce sabor que le hace falta a tu vida”</h3>
                <div class="buttons-container">
                    <input type="search" id="search" name="search" placeholder=" &#xf002;" />
                    <a href="src/pages/compras.html">
                        <button type="submit">
                            <i class="fa-solid fa-cart-shopping shop"></i>
                        </button>
                        <Link to="/Home"><button type="submit">
                            <i class="fa-solid fa-house-chimney shop"></i>
                        </button></Link> 
                    </a>
                </div>
            </div>
        </header>
    );
}
export default Header;