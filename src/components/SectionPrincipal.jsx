import "./styles.css"

const SectionPrincipal = () => {
	return (
		<div
			className="section-principal d-flex justify-content-center align-items-center position-relative"
			style={{ height: "60vh", marginTop: "80px" }} // Limita la altura al 80% de la ventana
		>
			<div
				className="d-flex flex-column align-items-center text-light text-center position-absolute p-3 justify-content-between"
				style={{ inset: 0 }}
			>
				<p
					className="text-uppercase fw-bold m-0"
					style={{
						fontSize: "clamp(1.5rem, 2vw, 2rem)",
						width: "100%",
						lineHeight: "1.1",
					}}

				>
					El <strong className="TextBold" style={{ fontSize: "clamp(2rem, 1.5vw, 1.3rem)" }}>evento más grande</strong> de Centroamérica y el Caribe Español.
				</p>

				<img
					src="/textoSectionPrincipal.svg"
					alt="Texto Principal"
					className="img-fluid my-3"
					style={{ maxWidth: "400px", width: "80%" }}
				/>
				<div className="d-flex container-fluid justify-content-center my-3">
					<img src="/banderas-19.png" alt="" className="banderas" />
				</div>

				<h2
					className="fw-semibold"
					style={{
						fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)"
						// margin: "1rem 0"
					}}
				>
					IMPULSA TU RED DE VENTAS Y <br /> DISTRIBUCIÓN IT
				</h2>

				{/* <h2
					className="text-uppercase TextBold m-0 text-center textBannerPrincipal"
				>
					innovación, sostenibilidad y comunidad
				</h2> */}
			</div>
		</div>
	);
};

export default SectionPrincipal;
