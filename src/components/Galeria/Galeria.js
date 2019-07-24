import React, { Component } from 'react';
import './Galeria.css';
import Carousel from 'react-bootstrap/Carousel';
import danielRomano1 from '../../img/danielRomano1.png';
import danielRomano2 from '../../img/danielRomano2.png';
import danielRomano3 from '../../img/danielRomano3.png';

class Galeria extends Component {
    render() {
        return (
            <section className="pb-2 bg-dark">
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-lg-12">
				            <h3 className="mt-3  text-white">¿ Que estuvimos haciendo ?</h3>
				            <p className=" text-white">Ademas de esta web, abajo podra ver algunos de nuestros trabajos mas recientes.
				            </p>
				        </div>                      
                    </div>
                    <div className="row">
                        <div className="col-lg-9 pt-2">
                            <Carousel id="carousel">
                                <Carousel.Item>
                                    <img alt="..." src={danielRomano1} className="d-block w-100"/>
                                <Carousel.Caption>

                                </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={danielRomano2} className="d-block w-100" alt="..."/>
                                <Carousel.Caption>

                                </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img alt="..." src={danielRomano3} className="d-block w-100"/>
                                <Carousel.Caption>

                                </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-lg-3 text-white mt-3">
                            <h4 className="justify-content-center">Turnero</h4>
                            <span className="">Sistema gestor de turnos para peluquerias. Agiliza el registro que suele 
                            hacerse en papel, automatiza cuestiones administrativas y cuenta con varios reportes. 
                            Manejo de turnos, registro del pago de los mismos, apertura y cierre de caja, reportes de 
                            ganancias, historial de turnos, estadisticas personalizadas.</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Galeria;