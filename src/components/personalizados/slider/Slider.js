import React from 'react';
import './Slider.css';
import Modal from "../modal/Modal";
import Aniversarios from '../../../assets/img/Aniversarios.jpg';
import Fiestas from '../../../assets/img/Fiestas-Infantiles.jpg';
import Ocasion from '../../../assets/img/Para-Toda-Ocasion.jpg';

function Slider() {
    return (
        <div>
            <section>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className='color1'></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className='color1'></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Aniversarios} className="d-block w-100 img" alt="aniversarios"/>
                                <div className="carousel-caption d-none d-md-block ">
                                <p className='textSlider'>Aniversarios</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Fiestas} className="d-block w-100 img" alt="fiestas infantiles"/>
                                <div className="carousel-caption d-none d-md-block">
                                <p className='textSlider'>Fiestas infantiles</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Ocasion} className="d-block w-100 img" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                <p className='textSlider'>Para toda ocasión</p>
                                </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev color" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden ">Previous</span>
                    </button>
                    <button className="carousel-control-next color" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


            </section>
            <div className="button">
                <button type="button" className="btn-order" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    !Haz tu pedido aqui!
                </button>
            </div>
            <Modal />
        </div>
    );
}
export default Slider;