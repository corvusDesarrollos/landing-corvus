import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container py-3 justify-content-center text-center" id="footer">
                    <h2 className="mb-3"><i className="fas fa-crow"></i> Corvus</h2>
                    <div className="row text-center">
                        <div className="col-lg-6">
                                <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title"><i className="fas fa-at"></i> E-mail:</h5>
                                            <p className="card-text">corvusdesarrollos@gmail.com</p>
                                        </div>
                                </div>
                        </div>
                        <div className="col-lg-6">
                                <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title"><i className="fas fa-mobile-alt"></i> Celular:</h5>
                                            <p className="card-text">3472529918</p>
                                        </div>
                                </div>
                        </div>
                    </div>
                    
                </div>
            </footer>
        )
    }
}

export default Footer;