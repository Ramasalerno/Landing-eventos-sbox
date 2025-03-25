import { useState, useEffect } from "react";
import { ImArrowUp2 } from "react-icons/im";
import "./styles.css"

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Función para manejar el scroll
    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        setIsVisible(scrollTop > window.innerHeight / 2); // Aparece a mitad de la página
    };

    // Función para hacer scroll al tope
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        // Agregar el evento al hacer scroll
        window.addEventListener("scroll", handleScroll);

        // Limpiar el evento
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="scroll-to-top-btn"
                    aria-label="Scroll to Top"
                >
                    <ImArrowUp2 size={50}/>
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;
