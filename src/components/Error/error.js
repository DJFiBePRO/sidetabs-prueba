import "./Error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Parece que está perdido</h3>

                <p>la página que busca no está disponible</p>
                <Link
                  to="/"
                  className="btn btn-secondary btn-sm"
                  //onClick={() => this.props.quitarMetadata()}
                >
                  <i class="fas fa-arrow-alt-circle-left"></i>
                  Regresar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Error;
