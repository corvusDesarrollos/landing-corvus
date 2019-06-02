import React, { Component } from 'react';
import './Header.css';
import logoC from '../../img/IMG_resp.png';

class Header extends Component {
	/*constructor () {
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
	}*/
	render() {
        return (
            <section id="inicio" className="main-header">
                <div className="background-overlay text-white pt-5 pb-5">
			        <div className="container">
						        <h1 className="text-center">Corvus - Desarrollo web</h1>
				        <div className="row">
					        <div className="col-md-6">
						    <div className="mas" id="contenedor-historia">
								{/*<p id="historia" className="mt-3">{this.state.historia}</p>*/}
								<ol className="ml-3 mt-4">
									<li type="circle" className="mt-2">
										Equipo de desarrollo web y soluciones informaticas, piensa en llevar su negocio a internet, este es su lugar.
									</li>
									<li type="circle" className="mt-2">
										Utilizamos la filosofia responsive web design, que tiene como objetivo adaptar la pagina web al dispositivo que la este usando.
									</li>
									<li type="circle" className="mt-2">
										Diseño web personalizado, a la medida de tu negocio.
									</li>
									<li type="circle" className="mt-2">
										Atencion personalizada, comunicacion transparente con muestras programadas para el progreso de su producto.
									</li>
								</ol>
						    </div>
						    {/*<button onClick={this.desplegarHistoria} id="ver-mas" className="btn btn-outline-secondary text-white">
							    {this.state.contenido}
						    </button>*/}
					        </div>
					        <div className="col-md-6">
                                <div className="mas d-flex justify-content-center" id="contenedor-logo">
                                    <img src={logoC} className="img-fluid logo" alt="logo" id="logo" />
                                </div>
					        </div>
				        </div>
			        </div>
		        </div>
            </section>
        )
    }
}



export default Header;