import "./styles.css"
const SectrionTracks = () => {
    return (
        <div className="container gap-3 d-flex flex-column my-5 tracks-container">
            <h1 className="text-center text-uppercase d-flex justify-content-center m-0 tracks-tematicos">
                tracks temáticos
            </h1>
            <div className="d-flex flex-column text-center contenedorTracks">
                <div className="d-flex justify-content-between">
                    <p className="text-uppercase" style={{fontWeight:"100"}}>networking</p>
                    <p className="text-uppercase" style={{fontWeight:"100"}}>server & storage</p>
                    <p className="text-uppercase" style={{fontWeight:"100"}}>seguridad</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="text-uppercase" style={{fontWeight:"100"}}>oem</p>
                    <p className="text-uppercase" style={{fontWeight:"100"}}>software</p>
                    <p className="text-uppercase" style={{fontWeight:"100"}}>telefonía y video</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="text-uppercase" style={{fontWeight:"100"}}>wireless</p>
                    <p className="text-uppercase" style={{fontWeight:"100"}}>infraestructura</p>
                    <p className="text-uppercase" style={{fontWeight:"100"}}>retail</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="text-uppercase" style={{fontWeight:"100"}}>impresion & digitalización</p>
                    <p className="text-uppercase" style={{fontWeight:"100"}}>gpon - fttx</p>
                </div>
            </div>
        </div>
    )
}

export default SectrionTracks