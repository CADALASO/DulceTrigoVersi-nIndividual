import React from 'react';
import { Link } from 'react-router-dom';
import './Modal.css';
function Modal() {
    return (
        <section id="modal" className="modal">
        <div className="modalContainer">
            <i className="fa-solid fa-address-card modalPicture"></i>
            <h2>ingresa algunos datos</h2>
            <form action="contact" id="form">
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre"/>
                <label for="celular">Número de contacto</label>
                <input type="text" name="celular"/>
                <label for="correo">Correo electrónico</label>
                <input type="email" name="correo"/>
                <label for="fecha">Fecha de entrega</label>
                <input type="date" name="fecha"/>
                <label for="personas">¿Cantidad de personas?</label>
                <input type="text" name="personas"/>
                <label for="textarea">¿Qué Producto Requiere?</label>
                <textarea name="textarea" rows="5" cols="50"></textarea>
            </form>
            <p className="modalP">Muchas gracias, en un momento nos contactaremos. </p>
            <Link to="" className="btn-send">Enviar</Link>
        </div>
    </section>
    );
}
export default Modal;