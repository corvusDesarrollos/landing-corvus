import React, { Component } from 'react';
import './RedesSociales.css';

class RedesSociales extends Component {
    render() {
        return (
            <section id="redes-sociales" className="bg-dark text-center text-white justify-content-center py-3">
                <div className="container background-color-black">
                    <div className="row">
                        <div className="col-lg-4 py-3">
                            <h1>Redes Sociales</h1>
                        </div>
                        {/* <div className="col-lg-4 py-3">
                            <a className="btn btn-primary btn-lg btn-block" target="_blanck" href="/">
                                Seguinos en Instagram <i className="fab fa-instagram"></i>
                            </a>
                        </div> */}
                        <div className="col-lg-4 py-3">
                            <a className="btn btn-primary btn-lg btn-block" href="https://www.facebook.com/CorvusDesarrollos/?modal=admin_todo_tour" target="_blanck">
                                Seguinos en FaceBook <i className="fab fa-facebook-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default RedesSociales;