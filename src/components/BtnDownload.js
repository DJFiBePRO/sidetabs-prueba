import {useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import Formulario from "../components/Formulario/components/formulario"

const BtnDownload = (props) => {
  console.log("isLogin", props.isLogin);
 
  const profile = useSelector(state => state.profile)
  console.log("PROFILE", profile)
  // 0 -> loading
  // 1 -> not login
  // 2 -> not in database
  // 3 -> register in database
  const [canDownload, setCanDownload] = useState(0);

  const handleDownloadDoc = (fileName) => (e) => {
    let urlParte1;
    let urlParte1a;
    let urlParte2 = "?service=wfs&version=2.0.0&request=GetFeature&typeNames=";
    let urlParte3;
    let urlParte4 = "&outputFormat=shape-zip";
    let urlFinal;
    let urlFinal2;
    let idURL = window.location.pathname;
    // idUrl = "/metadata/8"
    idURL = idURL.replace("/metadata/", "");
    // idUrl = "8"
  
    // Asigna la direccion de cada archivo
    for (const capa of props.capas) {
      if (capa.id === idURL) {
        urlParte1 = capa.urlWFS;
        urlParte1a = capa.urla;
        urlParte3 = capa.layers;
      }
    }
    urlFinal = urlParte1 + urlParte2 + urlParte3 + urlParte4; //Dir archivo de descarga
    urlFinal2 = urlParte1a + urlParte2 + urlParte3 + urlParte4; //Dir archivo de descarga visitante
    console.log("Final1: " + urlFinal);
    console.log("Final2: " + urlFinal2);
    // Downloads the file
    let link = document.createElement("a");
    link.href = urlFinal; //direccion en la que se encuentra el archivo
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const verifyUser = async () => {
    setCanDownload(0)
    if(!profile) return setCanDownload(1);
    console.log("request",profile);
    try {
      const res = await fetch(`http://localhost:2000/users?email=${profile.email}`);
      const {exists} = await res.json();
      console.log("EXISTE EN BASE DE DATOS?", exists);
      if(!exists) return setCanDownload(2);
      return setCanDownload(3);
    } catch (error) {
      setCanDownload(1)
    }
  }

  useEffect(() => {verifyUser()}, [profile])  

  return (
    <div>
      <p>{props.description}</p>
      <div className="row ">
        <div className="col-sm-auto">
          {canDownload === 0 &&(
            <div>cargando...</div>
          )}
          {canDownload === 1 &&(
            <button
              className="btn btn-primary btn-sm"
              onClick={() => {
                alert("Debe iniciar sesión");
              }}
              data-bs-toggle="tooltip" data-bs-placement="bottom" title="Inicie Sesión para Descargar"
            >
              <i class="fas fa-cloud-download-alt"></i> Descargar
            </button>
          )}
          {canDownload === 2 && (
            <Formulario refresh={verifyUser}/>
          )}
          {canDownload === 3  && (
            <button
              className="btn btn-primary btn-sm"
              onClick={handleDownloadDoc()}
            >
              <i class="fas fa-cloud-download-alt"></i> Descargar
            </button>
          )}
          <Link
            to="/mapa"
            className="btn btn-secondary btn-sm"
            //onClick={() => this.props.quitarMetadata()}
            href=""
          >
            <i class="fas fa-arrow-alt-circle-left"></i>
            Regresar
          </Link>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
  capa: state.capa,
  capas: state.capas,
});
const mapDispatchToProps = (dispatch) => ({
  quitarMetadata() {
    dispatch({
      type: "QUITAR_METADATA",
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BtnDownload);
