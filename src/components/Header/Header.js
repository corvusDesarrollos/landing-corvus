import React, { Component } from 'react';
import './Header.css';
import logoC from '../../img/logo-cuervo.png';

class Header extends Component {
	constructor () {
		super();

		this.state = {
			contenido: "Ver mas",
			historia: "Equipo de desarrollo web y soluciones informaticas"
		};

		this.desplegarHistoria = this.desplegarHistoria.bind(this);
	}

	desplegarHistoria() {
		if(this.state.contenido === "Ver mas") {
			console.log('hola');
			this.setState({
				contenido: "Ver menos",
				historia: "Equipo de desarrollo web y soluciones informaticas, piensa en llevar su negocio a internet para una mayor expocicion en el mercado en linea o facilitar sus procesos con un sistema web para trabajar desde casa, su celular y demas dispositivos. En la proxima seccion vera una muestra de nuestro trabajo."
			}) 
		} else {
			console.log('gola');
			this.setState({
				contenido: "Ver mas",
				historia: "Equipo de desarrollo web y soluciones informaticas"
			})
		}
	}
	render() {
        return (
            <div id="inicio" className="main-header">
                <div className="background-overlay text-white py-5">
			        <div className="container">
				        <div className="row">
					        <div className="col-md-6 text-center justify-content-center align-self-center">
						        <h1>Corvus - Desarrollo web</h1>
						    <div className="mas" id="contenedor-historia">
							    <p id="historia" className="mt-3">{this.state.historia}</p>
						    </div>
						    <button onClick={this.desplegarHistoria} id="ver-mas" className="btn btn-outline-secondary text-white">
							    {this.state.contenido}
						    </button>
					        </div>
					        <div className="col-md-6">
                                <div className="mas" id="contenedor-logo">
                                    <img src={logoC} className="img-fluid d-none d-sm-block logo" alt="logo" id="logo" />
                                </div>
					        </div>
				        </div>
			        </div>
		        </div>
            </div>
        )
    }
}



export default Header;