import { createStore } from "redux";
import { confs } from "../src/urls";

const subRutaGeoserver = "geoserver"; //subruta de geoserver
const urlBackend = `${confs.urlGeoserv}:${confs.portGeoserv}/${subRutaGeoserver}`;

const capaUrlWMS = `${urlBackend}/wms`; //servicio de consumo para host
const capaUrlWFS = `${urlBackend}/wfs`; //servicio de consumo para host

export const Capas = [
	{
		id: "1000",
		nombreCapa: "Coordenadas de Estaciones",
		visible: false,
		urlWMS: capaUrlWMS,
		urlWFS: capaUrlWFS,
		layers: `patfa:coord_estaciones`,
		// url2WMS: capaUrl2WMS,
		// url2WFS: capaUrl2WFS,
		shapeFile: "dirección de capa 1",
		metadata: `Una estación meteorológica es un conjunto de dispositivos o instrumentos que recoge los datos de distintas variables atmosféricas que son de interés para la meteorología. Pueden estar instaladas en cualquier terreno y parte del mundo, en este caso se realiza una implemetacion de estaciones meteorológicas en la Provincia de Francisco de Orellana. Siendo así el principal modelo de capas para la interaccion con el SIG   
    
    Según registros del MAG Distrito Orellana, se tiene los siguientes datos de los productores de cacao en la región de estudio se tiene:
    •	Existen un total de 1461 productores registrados.
    •	Existe un total de 1988.89 hectáreas de cultivos de cacao en la zona.
    •	El tipo de plantación de cacao está distribuida de la siguiente manera: 842 del tipo super árbol, 315 del tipo CCN-51 y 304 el tipo nacional.
    •	El cantón que más albergan a los productores es Loreto, seguido de La Joya de los Sachas y Francisco de Orellana 

    `,
	},
	{
		id: "9", //Este Id viene del IDEstudio
		nombreCapa: "Plantas La Belleza",
		visible: false,
		urlWMS: capaUrlWMS,
		urlWFS: capaUrlWFS,
		x: "-77.220704",
		y: "-0.635699",
		layers: `patfa:plantas_la_belleza`,
		// url2WMS: capaUrl2WMS,
		// url2WFS: capaUrl2WFS,
		shapeFile: "dirección de capa 2",
		metadata: `
    La cabecera Parroquial “La Belleza” esta poblado en un 90% de personas que migraron desde la Provincia de Loja, Bolívar y un pequeño porcentaje de Manabí, la razón de este éxodo fue entre varias y una de las principales la pobreza y falta de oportunidades en estas provincias, lo que obligo a ciertas familias a migrar en busca de mejores horizontes y oportunidades económicas decidiendo venir a po- blar la selva Amazónica del Ecuador en el sector que hoy se conoce como “La Belleza”.

    La Belleza nace oficialmente como parroquia, el 30 de Julio de 1998, según Registro Oficial Nº 372: “Ley de Creación de la Provincia de Orellana”; “Art.3.- La jurisdicción política-administrativa de la pro- vincia de Orellana comprenderá los cantones de: Francisco de Orellana con sus parroquias…”; LA BE- LLEZA existe como parroquia desde el instante que nace la provincia de Orellana ya que se la reconoce como una de las parroquias que conforman el Cantón Francisco de Orellana de la nueva Provincia. Esto se da en la Administración del Dr. Fabián Alarcón Rivera Presidente Constitucional Interino de la República del Ecuador.
    `,
	},
	{
		id: "2", //Este Id viene del IDEstudio
		nombreCapa: "Plantas Puerto Murialdo - Loreto",
		visible: false,
		urlWMS: capaUrlWMS,
		urlWFS: capaUrlWFS,
		x: "-77.129627",
		y: "-0.626326",
		layers: `patfa:plantas_puertomurialdo`,
		// url2WMS: capaUrl2WMS,
		// url2WFS: capaUrl2WFS,
		shapeFile: "dirección de capa 3",
		metadata: `
    Puerto Murialdo se encuentra al este de la Provincia de Orellana a 250 Km de la capital de Ecuador, Quito. 
    De la información recolectada del territorio determina que su principal actividad es la agricultura en consecuencia los principales productos que en la parroquia se producen son; el café, el cacao, maíz, yuca y plátano, sin embargo para objeto de este diagnóstico hemos tomado la información oficial emitida por el censo nacional agropecuario, resultados cantonales 2000, en donde, el café se encuentra como su principal producto con una superficie sembrada 4,622 hectáreas, las cuales se encuentran en 1.005 UPAs; le sigue en este orden el maíz con 1.412 hectáreas sembradas en 434 UPAs, luego se encuentra el cacao con 1.076 hectáreas, las cuales están en 198 UPAs; en menor cantidad está el plátano con 678 hectáreas, yuca con 177 hectáreas, arroz con 120 hectáreas, palma africana con 95 hectáreas y finalmente el palmito con 20 hectáreas.

Los principales productos como el café, cacao, maíz, y otros como la palma africana y palmito son producidos y destinados exclusivamente a la comercialización en la cabecera cantonal; los productos como la yuca, el plátano y el arroz son producidos y destinados al consumo interno, los excedentes son comercializados en la misma parroquia.
    `,
	},
	{
		id: "1", //Este Id viene del IDEstudio
		nombreCapa: "Plantas San José de Dahuano - Loreto",
		visible: false,
		urlWMS: capaUrlWMS,
		urlWFS: capaUrlWFS,
		x: "-77.291757",
		y: "-0.616313",
		layers: `patfa:plantas_sanjosedahuano`,
		// url2WMS: capaUrl2WMS,
		// url2WFS: capaUrl2WFS,
		shapeFile: "dirección de capa 4",
		metadata: `
    Se sitúa en la parte sur del cantón Loreto, a una altura promedio de 400 m.s.n.m., hasta los 600 msnm, su temperatura promedio anual es de 24 ºC. La mayor parte de la población es indígena y aún mantienen las costumbres culturales de sus antepasados.

    Cascada Refugio de las Loras

    Ubicado a Latitud: 02º 37’ 861 y Longitud: 99º 12’ 080”, en la comunidad la Paz, Parroquia San José de Dahuano, Cantón Loreto, a 365 msnm.  

    La cascada posee una altura de 15 m, en su caída sus aguas caen sobre unas rocas, formando una piscina natural de perfil redondo de 30 m de diámetro y la poza posee 2,50 m de profundidad. 

    En la parte alta están algunos orificios que son nidos de loros que se encuentran camuflados por los musgos y líquenes, este es un hábitat estratégico para la defensa de los pichones en contra de sus depredadores. 

    Se llega a esta cascada por la vía Coca – Loreto – La Paz,  en vehículo toma un tiempo de 1 hora con 20 minutos desde la ciudad Pto. Francisco de Orellana, y desde ahí se camina 10 minutos por un sendero auto guiado hasta el atractivo.
    `,
	},
	{
		id: "4", //Este Id viene del IDEstudio
		nombreCapa: "Plantas Unión Milagreña - Sacha",
		visible: false,
		urlWMS: capaUrlWMS,
		urlWFS: capaUrlWFS,
		x: "-76.749824",
		y: "-0.371444",
		layers: `patfa:plantas_union_milagrena_sacha`,
		// url2WMS: capaUrl2WMS,
		// url2WFS: capaUrl2WFS,
		shapeFile: "dirección de capa 5",
		metadata: `
      La parroquia Unión Milagreña se ubica en el cantón Joya de los Sachas, perteneciente a la provincia de Orellana, en el kilómetro 12.5 vía Sacha  Pompeya, se encuentra a una altura entre los 250 y 300 msnm.
      
      Clima.-

      El clima en este sector está caracterizado por una temperatura media anual de 25°C, las precipitaciones están entre 3000 mm hasta de los 6000 mm, la humedad relativa es del 90 %. 
      
      Agricultura.-

      Hoy se puede encontrar una variedad de cultivos gracias a los diferentes pisos climáticos como: cacao, café, maíz y arroz        entre los principales.
      Extensión en km2.-La superficie de la parroquia es de 140.08 km2. 
      `,
	},
	{
		id: "5", //Este Id viene del IDEstudio
		nombreCapa: "Plantas INIAP Zona 1",
		visible: false,
		urlWMS: capaUrlWMS,
		urlWFS: capaUrlWFS,
		x: "-76.872751",
		y: "-0.342917",
		layers: `patfa:zona1`,
		// url2WMS: capaUrl2WMS,
		// url2WFS: capaUrl2WFS,
		shapeFile: "dirección de capa 6",
		metadata: `
    La Estación Experimental Central de la Amazonía del INIAP lleva a cabo acciones que se encuentran dentro del plan estratégico para el manejo óptimo de recursos naturales, como parte de estas acciones se desarrolla el proyecto de “Conversión de Silvopasturas”, mismo que se ejecuta en varias fincas dentro de las provincias de Orellana y Sucumbíos.

    El desarrollo del proyecto en mención busca el aprovechamiento óptimo de las áreas destinadas para alimento de ganado, mejora de la calidad nutritiva del alimento, fomento del buen manejo de pastizales y el cultivo de leguminosas forrajeras, con el fin de aprovechar los recursos que se generan en ésta zona del país.
    `,
	},
	{
		id: "11", //Este Id viene del IDEstudio
		nombreCapa: "Plantas INIAP Zona 2",
		visible: false,
		urlWMS: capaUrlWMS,
		urlWFS: capaUrlWFS,
		x: "-76.863751",
		y: "-0.357927",
		layers: `patfa:zona2`,
		// url2WMS: capaUrl2WMS,
		// url2WFS: capaUrl2WFS,
		shapeFile: "dirección de capa 7",
		metadata: `
    La Estación Experimental Central de la Amazonía del INIAP lleva a cabo acciones que se encuentran dentro del plan estratégico para el manejo óptimo de recursos naturales, como parte de estas acciones se desarrolla el proyecto de “Conversión de Silvopasturas”, mismo que se ejecuta en varias fincas dentro de las provincias de Orellana y Sucumbíos.

    El desarrollo del proyecto en mención busca el aprovechamiento óptimo de las áreas destinadas para alimento de ganado, mejora de la calidad nutritiva del alimento, fomento del buen manejo de pastizales y el cultivo de leguminosas forrajeras, con el fin de aprovechar los recursos que se generan en ésta zona del país.
    `,
	},
];
const capaFaltante = {
	id: "3",
	x: "-76.934252",
	y: "-0.303065",
	nombreCapa: "Lago San Pedro",
};
const initialStore = {
	isLogin: false,
	// profile: {
	//   email: null,
	//   givenName: null,
	//   familyName: null,
	// },
	profile: null,
	capas: Capas,
	capasPorMostrar: Capas,
	capasMostradas: [],
};
const reducerUser = (state = initialStore, action) => {
	if (action.type === "AGREGAR_CAPA") {
		const capasM = state.capasMostradas.concat(action.capa);

		// sort
		capasM.sort((a, b) => {
			if (a.id > b.id) {
				return 1;
			}
			if (a.id < b.id) {
				return -1;
			}
			// a must be equal to b
			return 0;
		});

		return {
			...state,
			capasMostradas: capasM,
			capasPorMostrar: state.capasPorMostrar.filter(
				(c) => c.id !== action.capa.id
			),
		};
	}
	if (action.type === "QUITAR_CAPA") {
		return {
			...state,
			capasMostradas: state.capasMostradas.filter(
				(c) => c.id !== action.capa.id
			),
			capasPorMostrar: state.capasPorMostrar.concat(action.capa),
		};
	}
	if (action.type === "AGREGAR_METADATA") {
		return {
			...state,
			capasMostradas: state.capasMostradas.concat(action.capa),
			capasPorMostrar: state.capasPorMostrar.filter(
				(c) => c.id !== action.capa.id
			),
		};
	}
	if (action.type === "QUITAR_METADATA") {
		return {
			...state,
			capasMostradas: state.capasMostradas.filter(
				(c) => c.id !== action.capa.id
			),
			capasPorMostrar: state.capasPorMostrar.concat(action.capa),
		};
	}
	if (action.type === "LOGIN") {
		return {
			...state,
			isLogin: true,
			profile: { ...action.payload },
		};
	}
	if (action.type === "LOGOUT") {
		return {
			...state,
			isLogin: false,
			profile: null,
		};
	}
	return state;
};
export default createStore(reducerUser);
