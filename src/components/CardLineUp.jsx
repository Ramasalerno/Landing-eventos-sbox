import "./styles.css"
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const CardLineUp = ({ id, bandera, paisaje, pais, direccion, fecha, url, boton }) => {
    return (
        <div
            key={id}
            className="text-light d-flex flex-column align-items-center text-center contenedorCardLineUp"

        >
            {/* Imagen del paisaje */}
            <div className="imgPaisaje"
                style={{
                    width: "100%",
                    height: "120px", // Altura fija para la imagen superior
                    background: `linear-gradient(transparent, rgb(0 0 60)), url(${paisaje}) center center / cover no-repeat`,
                    position: "relative",
                }}
            >
                {/* Bandera superpuesta */}
                <img
                    src={bandera}
                    alt={`Bandera de ${pais}`}
                    style={{
                        height: "60px",
                        position: "absolute",
                        bottom: "10px", // Superposición hacia abajo
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                />
            </div>



            {/* Contenido de la card */}
            <div className="d-flex flex-column align-items-center text-center cardContent" style={{color:"#2f388d"}}>
                {/* Texto */}
                <h5 className="text-uppercase" style={{ fontWeight: "901", marginBottom: "0px", fontFamily:"'FreestyleScript-Regular', cursive", fontSize:"30px" }}>
                    {pais}
                </h5>
                <div className="d-flex justify-content-between" style={{ width: "100%" }}>
                    <FaLocationDot
                        size={25}
                    />
                    <p style={{ fontSize: "1rem", marginBottom: "15px", fontWeight: "500", width: "80%" }}>{direccion}</p>
                </div>
                <div className="d-flex justify-content-between" style={{ width: "100%" }}>
                    <FaCalendarAlt
                        size={25}
                    />
                    <h6
                        style={{
                            borderBottom: "2px solid #2f388d",
                            width: "100%",
                            paddingBottom: "5px",
                            fontSize:"22px"
                        }}
                    >
                        {fecha}
                    </h6>
                </div>
                <Link
                    to={url}
                    className="registrarme my-3"
                    style={{
                        textDecoration: "none",
                        fontWeight: "bold",
                        padding: "5px",
                        transition: "all 0.3s ease",
                    }}
                >
                    {boton}
                </Link>
            </div>
        </div>
    )
}

export default CardLineUp