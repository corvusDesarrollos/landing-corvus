import React, { Component } from 'react';
import './Navegacion.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Navegacion extends Component {
    render() {
        return (
            <Navbar className="navbar navbar-expand-lg navbar-dark" collapseOnSelect>
                <Navbar.Brand href="#home"><i className="fas fa-crow"></i> Corvus</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="contacto" href="#footer"><i class="far fa-comments"></i> Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navegacion;