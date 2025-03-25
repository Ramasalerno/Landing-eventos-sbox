import "./styles.css"

import 'animate.css';
import CardLineUp from "./CardLineUp";

const SectionLineUp = () => {

	const lineUp = [
		{
			id: 1,
			paisaje: "/lineUp/honduras.png",
			bandera: "/lineUp/banderas/bandera-honduras.png",
			pais: "honduras",
			direccion: "Complejo de Bodegas Rapaco,Portón #2, Oficina #11. Anillo periférico, atrás de gasolinera UNO",
			fecha: "18 de Febrero 2025",
			url: "/galeria",
			boton: "revive la expo"
		},
		{
			id: 2,
			paisaje: "/lineUp/guatemala.jpg",
			bandera: "/lineUp/banderas/bandera-guatemala.png",
			pais: "guatemala",
			direccion: "Barceló Guatemala City, 7A Avenida 15-45, Cdad. de Guatemala 01009, Guatemala",
			fecha: "20 de Febrero 2025",
			url: "/galeria",
			boton: "revive la expo"
		},
		{
			id: 3,
			paisaje: "/lineUp/RD.jpg",
			bandera: "/lineUp/banderas/bandera-rd.png",
			pais: "república dominicana",
			direccion: "A confirmar dirección",
			fecha: "24 de Abril",
			url: "https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&token=2d67c9b72be24d5b9106d12fb7c703f9&id=2qwNnw-plE6AL1RPBaVfBkVyRCGup4NEvO14EDVK50BURUhLUkI2QjdHTVo5VU01S1ZUMFpLQ1NWOS4u",
			boton: "registrarse"
		},
		{
			id: 4,
			paisaje: "/lineUp/panama.jpeg",
			bandera: "/lineUp/banderas/bandera-panama.png",
			pais: "panama",
			direccion: "A confirmar dirección",
			fecha: "15 de Mayo",
			url: "#",
			boton: "próximamente"
		},
		{
			id: 5,
			paisaje: "/lineUp/costaRica.webp",
			bandera: "/lineUp/banderas/bandera-costa-rica.png",
			pais: "guatemala",
			direccion: "A confirmar dirección",
			fecha: "13 de Mayo",
			url: "#",
			boton: "próximamente"
		},
		{
			id: 6,
			paisaje: "/lineUp/elSalvador.jpeg",
			bandera: "/lineUp/banderas/bandera-el-salvador.png",
			pais: "el salvador",
			direccion: "A confirmar dirección",
			fecha: "8 de Abril",
			url: "https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&token=87889765f73f4868a98458af85c2dccf&id=2qwNnw-plE6AL1RPBaVfBkVyRCGup4NEvO14EDVK50BUNjMwTUUzUERNUVg5MEVaNU1USENRMzBYMy4u",
			boton: "registrarse"
		},
	]

	return (
		<div
			className="d-flex flex-column align-items-center position-relative"
			id="section-lineup"
		>
			<h1 className="text-uppercase d-flex justify-content-center m-0" style={{ color: "#2f388d", fontWeight: "905", fontSize: "5.2em", position: "relative", top: "22px" }}>
				line up
			</h1>
			{/* Imagen de fondo */}
			<img
				src="/backgrounds/BGlineup.webp"
				alt="Background"
				className=" imgFondoLineUp"
			/>

			{/* Contenedor de las cards */}
			<div
				className="d-flex flex-wrap justify-content-center align-items-center"
				style={{
					position: "relative",
					zIndex: 2,
					gap: "20px", // Espaciado entre cards
					maxWidth: "1200px", // Ancho máximo para mantener diseño limpio
					padding: "20px",
				}}
			>
				{lineUp.map((item) => (
					<CardLineUp key={item.id}
						id={item.id}
						bandera={item.bandera}
						paisaje={item.paisaje}
						pais={item.pais}
						direccion={item.direccion}
						fecha={item.fecha}
						url={item.url}
						boton={item.boton}
					/>
				))}
			</div>
		</div>
	);


}

export default SectionLineUp