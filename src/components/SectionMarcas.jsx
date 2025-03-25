import "./styles.css";

const SectionMarcas = () => {
    return (
        <div className="marcas-container text-center">
            <h1 className="text-center text-uppercase d-flex justify-content-center marcas-acompañan marcas-container">
                marcas que nos acompañan
            </h1>

            <div className="carousel-marcas">
                <div className="carousel-track">
                    <img src="/marcas/web_marcas1.png" alt="Marca 1" />
                    <img src="/marcas/web_marcas2.png" alt="Marca 2" />
                    <img src="/marcas/web_marcas3.png" alt="Marca 3" />
                    <img src="/marcas/web_marcas4.png" alt="Marca 4" />
                    <img src="/marcas/web_marcas5.png" alt="Marca 5" />
                    {/* Duplicamos las imágenes para el bucle infinito */}
                    <img src="/marcas/web_marcas1.png" alt="Marca 1" />
                    <img src="/marcas/web_marcas2.png" alt="Marca 2" />
                    <img src="/marcas/web_marcas3.png" alt="Marca 3" />
                    <img src="/marcas/web_marcas4.png" alt="Marca 4" />
                    <img src="/marcas/web_marcas5.png" alt="Marca 5" />
                </div>
            </div>
        </div>
    );
};

export default SectionMarcas;
