
import { Link } from "react-router-dom"
import "./styles.css"
const ButtonsHome = () => {
    const handleScroll = () => {
        const section = document.getElementById("section-lineup");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="d-flex justify-content-evenly text-center gap-md-5 gap-2 contenedorBotones">
            <button onClick={handleScroll} href="https://docs.google.com/forms/d/1wRAA7h-6Ppx5FULJ4z1aFi1XzoqIcwCRPkKTXswXt_w/viewform?edit_requested=true" className="buttonBanner">registro</button>
            <a target="_blank" href="https://docs.google.com/forms/d/1VBzxvdh92-P2EmBEqZAEcEwX1Io5lFu3nrlPeibqSho/viewform?edit_requested=true" className="buttonBanner">quiero patrocinar</a>
            <Link to={"/galeria"} className="buttonBanner">galeria de fotos</Link>
        </div>
    )
}

export default ButtonsHome