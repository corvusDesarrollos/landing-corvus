import React, { Component } from 'react';
import './Navegacion.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';

class Navegacion extends Component {
    render() {
        return (
            <Navbar className="navbar navbar-expand-lg navbar-dark" collapseOnSelect>
                <Navbar.Brand href="#home"><i className="fas fa-crow"></i> Corvus</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link activeClass="active" className="contacto" to="test1" spy={true} smooth={true} duration={500} ><i className="far fa-comments"></i> Contacto</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navegacion;