import ButtonsHome from "./ButtonsHome";

const SectionRegistroPatrocinar = () => {
    return (
        <div
            className="contenedorRegistroPatrocinar"
        >
            {/* Imagen de fondo */}
            {/* <img
                src="/backgrounds/expoSolutionBox-3-16.jpg"
                alt="Fondo"
                className=" start-0 w-100 h-100 imgRegistroPatrocinar"
                
            /> */}

            {/* Contenedor de botones */}
            <div
                className="contenedorButtons"
            >
                {/* <div
                    className="d-flex flex-wrap justify-content-center"
                    
                > */}
                    <ButtonsHome />
                {/* </div> */}
            </div>
        </div>
    );
};

export default SectionRegistroPatrocinar;
