import React from 'react';
import './Slider.css';
import Aniversarios from '../../assets/img/Aniversarios.jpg'
import Fiestas from '../../assets/img/Fiestas-Infantiles.jpg'
import Ocasion from '../../assets/img/Para-Toda-Ocasion.jpg'
import { Link } from 'react-router-dom';

function Slider() {
    return (
        <div>
            <section id="slider">
                <ul>
                    <li>
                        <img src={Aniversarios} alt="aniversarios" />
                        <p>Aniversarios</p>
                    </li>
                    <li>
                        <img src={Fiestas} alt="fiestas infantiles" />
                        <p>Fiestas infantiles</p>
                    </li>
                    <li>
                        <img src={Ocasion} alt="para toda ocasión" />
                        <p>Para toda ocasión</p>
                    </li>
                </ul>
            </section>
            <div className="button">
                <Link to="" className="btn-order">!Haz tu pedido aqui!</Link>
            </div>
        </div>
    );
}
export default Slider;