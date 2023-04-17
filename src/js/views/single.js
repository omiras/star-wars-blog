import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

/**
 * 1. Recuperar la parte dinámica del elemento que queremos recuperar de la API
 * 2. Hacer una nueva llamada a la API para que nos de información detallada de lo que sea que queremos detalles /vehicles/232
 * 3. Rellenar toda la información en el componente adecuadamente
 * 4. Claves:
 *   1. Usar bien useState, useEffect
 *   2. REcuperar bien los parámetros dinámicos con useParams()
 */

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
