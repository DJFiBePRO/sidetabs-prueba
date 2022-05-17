const Footer = () => (
    <footer className="bg-success text-light text-center" 
    // style=
    //   {{
    //     position: "relative",
    //     bottom: "0",
    //     width: "100%",
    //     height: "110px",
    //     padding: "5%"
    //   }}
    >
      <div className="container justify-content-evenly p-4">
        &copy; Proyecto PATFA <br/>
        2020 - {new Date().getFullYear()}<br/>
        Todos los derechos reservados
      </div>
    </footer>
  );
  
  export default Footer;