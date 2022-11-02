import $ from "jquery";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import Warning from "../../Warning/warning";
import { confs } from "../../../urls";

import axios from "axios";

const Formulario = ({ refresh }) => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	const profile = useSelector((state) => state.profile);

	return (
		<>
			<Warning />
			<a
				className="btn btn-primary btn-sm"
				data-bs-toggle="modal"
				href="#warningModal"
				role="button"
			>
				Descargar shapefile
			</a>
			<div
				className="modal fade"
				id="formModal"
				aria-hidden="true"
				aria-labelledby="formModalLabel"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="formModalLabel">
								Registro
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							/>
						</div>

						<div className="modal-body">
							<Formik
								initialValues={{
									nombre: profile?.givenName || "",
									apellido: profile?.familyName || "",
									email: profile?.email || "",
									institucion: "",
								}}
								validate={(valores) => {
									let errores = {};
									//Validacion nombre
									if (!valores.nombre) {
										errores.nombre =
											"Por favor ingrese sus dos nombres";
									} else if (
										!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
											valores.nombre
										)
									) {
										errores.nombre =
											"Solo debe contener letras y espacios";
									}
									//Validacion apellido
									if (!valores.apellido) {
										errores.apellido =
											"Por favor ingrese sus dos apellidos";
									} else if (
										!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
											valores.apellido
										)
									) {
										errores.apellido =
											"Solo debe contener letras y espacios";
									}
									//Validacion email
									if (!valores.email) {
										errores.email =
											"Por favor ingrese su email";
									} else if (
										!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
											valores.email
										)
									) {
										errores.email =
											"Solo debe contener letras, numeros, puntos, guiones y guion bajo";
									}
									//Validacion institucion
									if (!valores.institucion) {
										errores.institucion =
											"Por favor ingrese su institucion";
									} else if (
										!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
											valores.institucion
										)
									) {
										errores.institucion =
											"Solo debe contener letras y espacios";
									}
									return errores;
								}}
								onSubmit={async (valores, { resetForm }) => {
									console.log("Formulario Enviado");
									console.log("Valores:", valores);
									try {
										const resp = await axios.post(
											`${confs.urlDatos}:${confs.portDatos}/formulario`,
											{ valores }
										);
										alert("Usuario registrado con éxito");
										refresh();
										console.log("Response:", resp);
										// close modal
										const myModalEl =
											document.getElementsByClassName(
												"modal-backdrop fade show"
											);
										myModalEl[0].hidden = true;
										console.log($("#formModal"));
										$("#formModal").hide();
										resetForm();
										cambiarFormularioEnviado(true);
										setTimeout(
											() =>
												cambiarFormularioEnviado(false),
											5000
										);
									} catch (error) {
										console.log(error);
										alert(
											"Error al registar usuario, intenta de nuevo"
										);
										// $('#errorModal').show();
										// const myModalEl = document.getElementsByClassName("modal-backdrop fade show");
										// myModalEl[0].hidden = false;
									}
								}}
							>
								{({ errors }) => (
									<Form className="formulario">
										<div>
											<label htmlFor="nombre">
												Nombres
											</label>
											<Field
												type="text"
												id="nombre"
												name="nombre"
												placeholder="Ingrese sus dos nombres"
												disabled
											/>
											<ErrorMessage
												name="nombre"
												component={() => (
													<div className="error">
														{errors.nombre}
													</div>
												)}
											/>
										</div>
										<div>
											<label htmlFor="apellido">
												Apellidos
											</label>
											<Field
												type="text"
												id="apellido"
												name="apellido"
												placeholder="Ingrese sus dos apellidos"
												disabled
											/>
											<ErrorMessage
												name="apellido"
												component={() => (
													<div className="error">
														{errors.apellido}
													</div>
												)}
											/>
										</div>
										<div>
											<label htmlFor="email">Email</label>
											<Field
												type="email"
												id="email"
												name="email"
												placeholder="Ingrese su email"
												disabled
											/>
											<ErrorMessage
												name="email"
												component={() => (
													<div className="error">
														{errors.email}
													</div>
												)}
											/>
										</div>
										<div>
											<label htmlFor="institucion">
												Institución
											</label>
											<Field
												type="text"
												id="institucion"
												name="institucion"
												placeholder="Ingrese la institucion que pertenece"
											/>
											<ErrorMessage
												name="institucion"
												component={() => (
													<div className="error">
														{errors.institucion}
													</div>
												)}
											/>
										</div>
										<button type="submit">Enviar</button>
										{formularioEnviado && (
											<div className="modal-dialog modal-sm">
												<p className="exito">
													FORMULARIO ENVIADO CON
													EXITO!
												</p>
											</div>
										)}
									</Form>
								)}
								{/* {({values,errors, touched, handleSubmit, handleChange, handleBlur}) => (
          <form className="formulario" onSubmit={handleSubmit}>
              {console.log(touched)}
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingrese sus dos nombres"
                values={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
            </div>
            <div>
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                placeholder="Ingrese sus dos apellidos"
                values={values.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.apellido && errors.apellido && <div className="error">{errors.apellido}</div>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingrese su email"
                values={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="institucion">Institución</label>
              <input
                type="text"
                id="institucion"
                name="institucion"
                placeholder="Ingrese la institucion que pertenece"
                values={values.institucion}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.institucion && errors.institucion && <div className="error">{errors.institucion}</div>}
            </div>
            <button type="submit">Enviar</button>
            {formularioEnviado && <p className="exito">FORMULARIO ENVIADO CON EXITO!</p>}
          </form>
        )}*/}
							</Formik>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Formulario;
