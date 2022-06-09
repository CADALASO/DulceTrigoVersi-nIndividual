import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Acercade from "../components/acercade/Acercade";
import Tips from "../components/acercade/tips/Tips"
import Whatsapp from "../components/Whatsapp/Whatsapp"
import Footer from "../components/footer/Footer";
function acercade() {
    return (
        <div>
            <Navbar />
            <Header />
            <Acercade/>
            <Tips/>
            <Whatsapp/>
            <Footer />
        </div>
    )
}

export default acercade;