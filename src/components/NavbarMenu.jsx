import { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles.css"
import { Link } from "react-router-dom";

const NavbarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleScroll = () => {
        const section = document.getElementById("section-lineup");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Navbar
            expand="md"
            className="fixed-top blurreado"
            style={{ backdropFilter: "blur(10px)", /* height: "80px" */ padding:"15px 0px" }}
        >
            <Container className="gap-5">
                {/* Logo */}
                <Link to="/">
                    <img
                        src="/textoSectionPrincipal.svg"
                        alt="Logo"
                        style={{ height: "50px" }}
                    />
                </Link>

                {/* Botón hamburguesa */}
                <Navbar.Toggle
                    onClick={() => setIsOpen(!isOpen)}
                    aria-controls="basic-navbar-nav"
                    className="border-0 borde-blanco"
                >
                    {isOpen ? <FaTimes size={24} color="#fff" /> : <FaBars size={24} color="#fff" />}
                </Navbar.Toggle>

                {/* Menú colapsable */}
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className={`justify-content-end ${isOpen ? "show" : ""}`}
                >
                    <div className="gap-4 d-flex justify-content-center">
                        <button onClick={handleScroll} target="_blank" href="#" className="menuBtn">registro</button>
                        <a target="_blank" href="https://docs.google.com/forms/d/1VBzxvdh92-P2EmBEqZAEcEwX1Io5lFu3nrlPeibqSho/viewform?edit_requested=true" className="menuBtn">quiero patrocinar</a>
                        <Link to={"/galeria"} className="menuBtn">galeria de fotos</Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarMenu;
