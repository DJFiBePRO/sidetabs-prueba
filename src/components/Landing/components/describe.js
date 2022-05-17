import { Link } from "react-router-dom";
const DescribeSection = () => {
	return (
		<div className=" ">
			<div className="">
				<img className="" src="/src/img/llama.svg" alt="" />
				<div className="">
					<h3>
						Contenido del presente Sistema de Información Geográfica
					</h3>
					<br />
					<p>
						El presente Sistema de Información Geográfica (SIG)
						permite publicar los mapas temáticos sobre las áreas de
						riesgo de las plantaciones de cacao. A su vez, permite
						identificar dichas áreas afectadas de la plaga Monilla
						de manera visual en el mapa de la zona de estudio. Así
						mismo, permite la descarga de los mapas en formato
						shapefile (.shp). De tal manera que el SIG pueda ayudar
						a dar respuesta a preguntas que se vinculen con el
						avance de la plaga en el territorio que está siendo
						monitoreado. Permitiendo al agricultor determinar una
						posible accion oportuna, que pueda ayudar a intervenir
						en la zona que se encuentra más propensa a la
						propagación de la plaga. El sistema abarca los
						siguientes componentes:
					</p>
					<br />
					<h4>DATOS</h4>
					<p>
						Componente de publicación de datos, presenta la
						información histórica de los datos recogidos para
						visualizar la presencia o ausencia de la plaga Monilla
						en el área de estudio.
					</p>
					<br />
					<h4>MAPA</h4>
					<p>
						Componente de publicación de capas, presenta la
						ubicación de las estaciones meteorológicas donde se está
						efectuando un monitoreo. En el mismo tiene la
						posibilidad de descargarse los mapas en archivo
						shapefile (.shp). Para que esto se efectue se debe dar
						clic en el botón de Información (i) que lo llevará a una
						página informativa acerca de la finca en donde se está
						realizando el monitoreo.
					</p>
					<br />
					<p>
						Se le invita a interactuar con el SIG dando clic en el
						siguiente botón
					</p>
					<div className="">
						<Link to="/mapa">
							<a
								className="btn btn-success"
								// rel="noopener"
								// target="_blank"
								data-bs-toggle="tooltip"
								data-bs-placement="bottom"
								title="Visualizar Mapa"
							>
								<i class="fas fa-location-arrow"></i>
								Mapa
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DescribeSection;
