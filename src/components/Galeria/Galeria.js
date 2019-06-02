import React, { Component } from 'react';
import './Galeria.css';
import Carousel from 'react-bootstrap/Carousel';
import fotoCarousel from '../../img/programming_0.jpg';

class Galeria extends Component {
    render() {
        return (
            <section className="text-center pb-2 bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-white">
				            <h3 className="mt-3">Obtenga su pagina web ideal</h3>
				            <p className="">Nos dedicamos al desarrollo de paginas webs hechas justo a la medida de su negocio o empresa, la calidad y confianza de nuesto servicio nos caracteriza. En la galeria de la izquierda vera algunos de nuestros diseños, para consultas o contrataciones no dude de pasar por nuestra seccion de contacto.
				            </p>
				        </div>                      
                    </div>
                    <div className="row">
                        <div className="col-lg-12 pt-2">
                            <Carousel>
                                <Carousel.Item>
                                    <img alt="..." src={fotoCarousel} className="d-block w-100"/>
                                <Carousel.Caption>
                                    <h3>Hola</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={fotoCarousel} className="d-block w-100" alt="..."/>
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img alt="..." src={fotoCarousel} className="d-block w-100"/>
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Galeria;