import React, { Component } from 'react';
import './Header.css';
import logoC from '../../img/IMG_resp.png';
import {Animated} from 'react-animated-css';

class Header extends Component {
	render() {
        return (
            <section id="inicio" className="main-header">
                <div className="background-overlay text-white pt-5 pb-5">
			        <div className="container">
						        <h1 className="text-center">Corvus - Desarrollo web</h1>
				        <div className="row">
					        <div className="col-md-6">
								<Animated animationIn="zoomIn" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
									<div className="" id="contenedor-historia">
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
								</Animated>
					        </div>
					        <div className="col-md-6">
								<Animated animationIn="bounceInLeft" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
									<div className="mas d-flex justify-content-center" id="contenedor-logo">
										<img src={logoC} className="img-fluid logo" alt="logo" id="logo" />
									</div>
								</Animated>
					        </div>
				        </div>
			        </div>
		        </div>
            </section>
        )
    }
}



export default Header;