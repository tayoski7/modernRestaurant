import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
function Footer() {

    return (
        <div>
            <footer>

                <Container fluid className='bg-dark text-white py-5 ps-5' >
                    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                    <Row className="row">
                        <Col className="mb-3" xs={12} md={3} lg={4}>

                            <div>
                                <h3 className=" font-weight-bold mb-4 text-uppercase"> Modern Restaurant</h3>
                                <div className='d-flex '>
                                    <FontAwesomeIcon className="me-3" icon={faInstagram}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="mx-3" icon={faTwitter}></FontAwesomeIcon>
                                    <FontAwesomeIcon className="mx-3" icon={faFacebook}></FontAwesomeIcon>
                                </div>
                            </div >
                        </Col>

                        <Col className="mb-3" xs={12} md={3} lg={2}>
                            <div>
                                <h3 className=" font-weight-bold mb-4 text-uppercase">Links</h3>
                                <div className=''>
                                    <p> <a href="/product">Product</a> <br /> <a href='/allergies'> Allergens</a></p>

                                </div>
                            </div>
                        </Col>

                        <Col className="mb-3" xs={12} md={3} lg={2}>
                            <div>
                                <h3 className=" font-weight-bold mb-4 text-uppercase">Contact</h3>
                                <div className=''>
                                    <p>+234894083338 <br /> restaurant@gmail.com</p>
                                </div>
                            </div>
                        </Col>
                        <Col className="mb-3" xs={12} md={3} lg={2}>
                            <div>
                                <h3 className=" font-weight-bold mb-4 text-uppercase">Hours</h3>
                                <div className=''>
                                    <p>Monday-sunday<br /> 10am-10pm</p>
                                </div>
                            </div>
                        </Col>

                        <Col className="mb-3" xs={12} md={3} lg={2}>
                            <div>
                                <h3 className=" font-weight-bold mb-4 text-uppercase">Location</h3>
                                <div className=''>
                                    <p>420 Willis Avenue <br />Jacksonville, FL 32216 </p>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container >



            </footer>
        </div>
    )
}

export default Footer;