import Counter from "./Counter";
import "./styles.css"
import { FaCheck } from "react-icons/fa6";
import { ImPlus } from "react-icons/im";


const SectionTertiary = () => {
	return (
		<div className="container-fluid">
			<div className="container contenedorH6 d-flex justify-content-evenly flex-md-row flex-column gap-3 my-4">
				<h6 className="botonH6">
					<div>
						<Counter end={6} />
					</div> países <br /> confirmados
				</h6>
				<h6 className="botonH6">
					<div className="d-flex align-items-center justify-content-center">
						<ImPlus size={50} /><Counter end={500} />
					</div>
					resellers en cada encuentro
				</h6>
				<h6 className="botonH6">
					<div className="d-flex align-items-center justify-content-center">
						<ImPlus size={50} /><Counter end={20} />
					</div>
					principales marcas <br /> de la industria
				</h6>
			</div>
			<div className="d-flex flex-column text-center lh-1">
				<p style={{ fontWeight: "500", fontSize: "2rem" }}>
					<FaCheck color="#2f388d" /> Posibilidad de nuevos negocios
				</p>
				<p style={{ fontWeight: "500", fontSize: "2rem" }}>
					<FaCheck color="#2f388d" /> Relacionamiento con todas las marcas
				</p>
				<p style={{ fontWeight: "500", fontSize: "2rem" }}>
					<FaCheck color="#2f388d" /> Capacitaciones dinámicas sobre las últimas tendencias
				</p>
			</div>
		</div>
	)
}

export default SectionTertiary