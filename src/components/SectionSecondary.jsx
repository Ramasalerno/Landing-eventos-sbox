import { Link } from "react-router-dom";

const SectionSecondary = () => {

    const handleScroll = () => {
        const section = document.getElementById("section-lineup");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div
            className="d-flex justify-content-center align-items-center position-relative"
            style={{ height: "100vh" }}
        >
            {/* Imagen de fondo */}
            <img
                src="/backgrounds/BG1.webp"
                alt=""
                className="position-absolute w-100 h-100 imgSectionSecondary"
                style={{ objectFit: "cover", maxHeight: "100vh" }}
            />

            {/* Contenido superpuesto */}
            <div
                className="d-flex flex-column align-items-center text-light text-center position-absolute px-3 justify-content-center mb-md-0 my-5"
                style={{ inset: 0/* , height:"max-content" */ }}
            >
                <img
                    src="/textoSectionPrincipal1.svg"
                    alt="Texto Principal"
                    className="img-fluid mb-md-4 m-0"
                    style={{ maxWidth: "400px", width: "80%" }}
                />

                <h2
                    className="mb-4"
                    style={{
                        fontWeight: "901",
                        fontSize: "clamp(3rem, 2.5vw, 2.5rem)",
                        color: "#2f388d"
                    }}
                >
                    ¿Qué Puedes Esperar?
                </h2>

                <div
                    className="d-flex flex-wrap justify-content-center gap-4 w-100 contenedorText"
                    style={{ maxWidth: "1200px", color: "#2f388d" }}
                >
                    <p
                        className="TextLight textColumna flex-grow-1"
                        style={{ fontSize: "clamp(1.3rem, 1.2vw, 1rem)", maxWidth: "250px" }}
                    >
                        <span className="TextBold">Charlas Inspiradoras</span> <br />
                        Escucha a los pioneros de la industria mientras comparten sus conocimientos y experiencias sobre las últimas tendencias y avances tecnológicos.
                    </p>
                    <p
                        className="TextLight textColumna flex-grow-1"
                        style={{ fontSize: "clamp(1.3rem, 1.2vw, 1rem)", maxWidth: "250px" }}
                    >
                        <span className="TextBold">Paneles de Discusión</span> <br />
                        Participa en debates dinámicos sobre temas cruciales como la sostenibilidad, la innovación y el impacto social de la tecnología.
                    </p>
                    <p
                        className="TextLight textColumna flex-grow-1"
                        style={{ fontSize: "clamp(1.3rem, 1.2vw, 1rem)", maxWidth: "250px" }}
                    >
                        <span className="TextBold">Demostraciones en Vivo</span> <br />
                        Descubre las últimas innovaciones tecnológicas a través de demostraciones en vivo que te permitirán ver y experimentar el futuro de primera mano.
                    </p>
                </div>

                <div className="d-flex justify-content-evenly text-center gap-md-5 gap-2 mt-5 flex-wrap contenedorBotones">
                    <button onClick={handleScroll} href="https://docs.google.com/forms/d/1wRAA7h-6Ppx5FULJ4z1aFi1XzoqIcwCRPkKTXswXt_w/viewform?edit_requested=true" className="pre-registro">registro</button>
                    <a target="_blank" href="https://docs.google.com/forms/d/1VBzxvdh92-P2EmBEqZAEcEwX1Io5lFu3nrlPeibqSho/viewform?edit_requested=true" className="patrocinar">quiero patrocinar</a>
                    <Link to={"/galeria"} className="patrocinar">galeria de fotos</Link>
                </div>
            </div>
        </div>
    );
};

export default SectionSecondary;
