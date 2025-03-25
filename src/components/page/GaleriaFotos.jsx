import SectionPrincipal from '../SectionPrincipal'
import SectionMarcas from '../SectionMarcas'
const GaleriaFotos = () => {
    return (
        <div>
            <SectionPrincipal />
            <div className="container d-flex justify-content-center">
                <div style={{ width: "800px" }}>
                    <h1 style={{ fontWeight: "901", color: "#2f388d", fontSize: "2.5rem" }} className='text-uppercase my-5 text-center'>hace click y revive nuestras expos</h1>
                    <div className="contenedorCharlas">
                        <div className='contCharlaHonduras'>
                            <img
                                src="/lineUp/banderas/bandera-honduras.png"
                                alt=""
                                height={80}
                            />
                            <h6 className="honduras">Honduras</h6>
                            <p className="fs-4">18 de febrero 2025</p>
                            <a href='#' className="verFotos">ver fotos</a>
                        </div>
                        <div className='contCharlaGuatemala'>
                            <img
                                src="/lineUp/banderas/bandera-guatemala.png"
                                alt=""
                                height={80}
                            />
                            <h6 className="guatemala">Guatemala</h6>
                            <p className="fs-4">20 de febrero 2025</p>
                            <a href='#' className="verFotos">ver fotos</a>
                        </div>
                    </div>
                </div>
            </div>
            <SectionMarcas />
        </div>
    );
};

export default GaleriaFotos;