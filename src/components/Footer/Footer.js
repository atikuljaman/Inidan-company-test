import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FacebookImg from '../../Assets/Images/facebook.png';
import TwitterImg from '../../Assets/Images/twitter.png';
import InstaImg from '../../Assets/Images/insta.png';
import BallImg from '../../Assets/Images/ball.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer-section'>
            <Container>
                <Row className='gy-5'>
                    <Col md={1}></Col>
                    <Col className='footer-left-content p-0' md={2}>
                        <h5 className='footer-logo'>TiroAceInt</h5>
                        <p className='footer-desc'>
                            Ready to help launch your project
                            along with our well-designed pages.
                        </p>
                        <div className='footer-img-container'>
                            <img src='img-fluid' src={FacebookImg} alt='' />
                            <img src='img-fluid' src={TwitterImg} alt='' />
                            <img src='img-fluid' src={InstaImg} alt='' />
                            <img src='img-fluid' src={BallImg} alt='' />
                        </div>
                    </Col>
                    <Col xs={6} className='footer-right-content' md={2}>
                        <div>
                            <h6>Home</h6>
                            <p>SaaS</p>
                            <p>Event</p>
                            <p>Mobile App</p>
                            <p>Desktop App</p>
                            <p>Startup</p>
                        </div>
                    </Col>
                    <Col xs={6} className='footer-right-content' md={2}>
                        <div>
                            <h6>Company</h6>
                            <p>About Us</p>
                            <p>Pricing</p>
                            <p>Careers</p>
                            <p>Contact</p>
                            <p>Blog</p>
                        </div>
                    </Col>
                    <Col xs={6} className='footer-right-content' md={2}>
                        <div>
                            <h6>Company</h6>
                            <p>Sign Up</p>
                            <p>Sign In</p>
                            <p>Forgot Password</p>
                        </div>
                    </Col>
                    <Col xs={6} className='footer-right-content' md={2}>
                        <div>
                            <h6>Get Help</h6>
                            <p>Developers Help</p>
                            <p>Docs</p>
                            <p>Free Training</p>
                            <p>Contact Sales</p>
                        </div>
                    </Col>
                    <Col md={1}></Col>
                </Row>
                <p className='copy-right-text'>
                    © Trio ACE International 2022. Concept Created by Atikul Jaman
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
