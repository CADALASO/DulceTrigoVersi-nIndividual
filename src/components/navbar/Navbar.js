import React from 'react';
import './Navbar.css';
function Navbar(){
    return(
        //Características del componente
        <div>
        <nav>
            <input type={'checkbox'} id="chk-menu" />
            <label for="chk-menu" class="btn-menu">
                <i class="fa-solid fa-bars"></i>
            </label>

            <div class="items">
                <a href="" class="item">Acerca de</a>
                <hr class="line-nav" />
                <a href="" class="item">Productos personalizados</a>
                <hr class="line-nav" />
                <a href="" class="item">Contacto</a>
            </div>
        </nav>
        <hr />
    </div>
    );
}
export default Navbar;