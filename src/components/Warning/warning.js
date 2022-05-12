import React from "react";

const Warning = () => {
  return (
    <>
      <div
        className="modal fade"
        id="warningModal"
        aria-hidden="true"
        aria-labelledby="warningModalLabel"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="warningModalLabel">
                Aviso
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              Para poder descargar el archivo, primero debe llenar un formulario
              con sus datos. ¿Desea hacerlo ahora?
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#formModal"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Si
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Warning;
