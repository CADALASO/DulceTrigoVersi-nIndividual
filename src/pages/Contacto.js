import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Banner from "../components/contacto/banner/Banner";
import FormContacto from "../components/contacto/formContacto/FormContacto";
import Contactos from "../components/contacto/contactos/Contacto";
import '../components/contacto/contactos/Contacto.css';

import LineVertical from "../assets/img/Line-vertical.png"
function Contacto() {
    return (
        <div>
            <Navbar />
            <Header />
            <Banner/>
            <div className="section">
            <FormContacto/>
            <img src={LineVertical} alt="line vertical" class="line-vertical"/>
            <Contactos/>
            </div>
            <Footer />
        </div>
    )
}

export default Contacto;