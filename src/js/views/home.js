import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

/**
 * en la HOME vamos a tener que hacer el siguiente trabaja
 * 
 * 1. Hacer una llamada a la API y traernos todos los CHARACTERS (o unos cuantos)
 * 2. Para cada Character, crar un <div> ? para maquetar un poco la información tal y como nos pide la practica
 * 3. Cada Character tiene un botón, que debe llevarme a una vista detallada del elemento /details/idCaracter
 * 4. Claves
 *    1. en layout.js, definir si hay nuevas rutas
 *    2. en el home.jsx, para cada elemento que me traigo de la API, generar adecuadamente el <Link to="...."> al planeta 1
 * <Link to="..."> al planeta 2
 * 
 */
export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
