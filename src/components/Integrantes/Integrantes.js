import React, { Component } from 'react';
import './Integrantes.css';
import fotoFink from '../../img/foto-fink.png'

class Integrantes extends Component {
    render() {
        return (
            <section id="integrantes" className="bg-light py-3">
                <div className="wrap">
                    <div className="container">
                        <h2>¿ Quienes somos ?</h2>
                        <div className="row text-center">
                            <div className="col-lg-6">
                                <div className="tarjeta-wrap">
                                    <div className="tarjeta">
                                        <div className="adelante fondo-fink">
                                            <img id="foto-fink" alt="..." src={fotoFink} className=""/>
                                            <h1 className="mt-3">Matías Fink</h1>
                                        </div>
                                        <div className="atras fondo-fink">
                                            <div className="mt-3">
                                                <h3 className="">Desarrollador front-end</h3>
                                                <ul className="list-group">
                                                    <li className="list-group-item"><i className="fab fa-html5"></i> HTML5</li>
                                                    <li className="list-group-item"><i className="fab fa-css3-alt"></i> CSS3</li>
                                                    <li className="list-group-item"><i className="fab fa-js"></i> Java Script</li>
                                                    <li className="list-group-item"><i className="fab fa-react"></i> React</li>
                                                    <li className="list-group-item"><i className="fab fa-bootstrap"></i> Bootstrap</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="tarjeta-wrap">
                                    <div className="tarjeta">
                                        <div className="fondo-tipo adelante">
                                            <h1 className="">Franco Schilliage</h1>
                                        </div>
                                        <div className="fondo-tipo atras">
                                            <div className="mt-3">
                                                <h3>Desarrollador back-end</h3>
                                                <ul className="list-group">
                                                    <li className="list-group-item">Json</li>
                                                    <li className="list-group-item">Django</li>
                                                    <li className="list-group-item">PotsgreSQL</li>
                                                    <li className="list-group-item"><i className="fab fa-html5"></i>  HTML5</li>
                                                    <li className="list-group-item"><i className="fab fa-css3-alt"></i> CSS3</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Integrantes;