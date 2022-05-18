import React from 'react';
import './Header.css';
import Logo from '../../assets/img/LogoDulceTrigo.svg'
function Header(){
    return(
        //Características del componente
        <header id="header-container">
        <img src={Logo} alt="Logo dulce trigo" class="logo" />
        <div class="button-header">
            <h3 class="header-title">“Traemos el dulce sabor que le hace falta a tu vida”</h3>
            <div class="buttons-container">
                <input type="search" id="search" name="search" placeholder=" &#xf002;" />
                <a href="src/pages/compras.html">
                <button type="submit">
                    <i class="fa-solid fa-cart-shopping shop"></i>
                </button>
                <button type="submit">
                    <i class="fa-solid fa-house-chimney shop"></i>
                </button>
                </a>
            </div>
        </div>
    </header>

    );
}
export default Header;