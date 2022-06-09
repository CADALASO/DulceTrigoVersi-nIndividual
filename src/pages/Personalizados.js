import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Intro from "../components/personalizados/intro/Intro"
import Slider from "../components/personalizados/slider/Slider"
import Whatsapp from "../components/Whatsapp/Whatsapp"
import Footer from "../components/footer/Footer";
function Personalizados() {
    return (
        <div>
            <Navbar />
            <Header />
            <Intro />
            <Slider />
            <Whatsapp/>
            <Footer />
        </div>
    )
}

export default Personalizados;