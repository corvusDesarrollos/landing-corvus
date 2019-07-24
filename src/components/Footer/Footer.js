import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className=" text-center text-white py-3">
                <h3 className="text-white mb-2">Contacto</h3>
                <div className="container justify-content-center" name="test1" id="footer">
                    <span>Para consultas o contrataciones no dude en comunicarse por cualquiera de los medios señalados abajo.</span>
                    <hr/>
                    <div className="row text-center">
                        <div className="col-lg-4">
                            <h5><i className="fas fa-mobile-alt"></i> Celular:</h5>
                            <p>3472447401 - 3472529918</p>
                        </div>
                        <div className="col-lg-4">
                            <h5><i className="fas fa-at"></i> E-mail:</h5>
                            <p>corvusdesarrollos@gmail.com</p>
                        </div>
                        <div className="col-lg-4">
                        <a className="btn text-white" href="https://www.facebook.com/CorvusDesarrollos/?modal=admin_todo_tour" target="_blanck">
                                <h5><i className="fab fa-facebook-square"></i> Seguinos en FaceBook </h5>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </footer>
        )
    }
}

export default Footer;