import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';


import './nav.css';


function Navigation() {

    return (

        <Navbar className='static-top bg-dark' bg collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand className='text-center  mt-4 mb-4 ' href="#home">Modern Resturant </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="container d-flex  justify-content-end">
                        <Nav.Link className='lnk ' as={Link} to='/' >Home</Nav.Link>
                        <Nav.Link className='lnk' as={Link} to='/about' >About Us</Nav.Link>
                        <Nav.Link className='lnk' as={Link} to='/contact' >Contact</Nav.Link>
                        <Nav.Link className='lnk' as={Link} to='/product'>Product</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Navigation;

