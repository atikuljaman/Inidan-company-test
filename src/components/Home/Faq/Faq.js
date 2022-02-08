import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    MdPhonelink, MdOutlineDashboardCustomize,
    MdFilePresent, MdOutlineWatchLater
} from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { VscWorkspaceUnknown } from "react-icons/vsc";
import './Faq.css';

const Faq = () => {
    return (
        <section className='faq-section'>
            <h5 className='faq-section-title'>Faq</h5>
            <h2 className='faq-section-heading'>
                What you should know
            </h2>
            <p className='faq-section-desc'>
                Check out the key features of your template.
                They can help you create your first-class
                project.
            </p>
            <Container className='faq-bottom-container'>
                <Row className='g-5'>
                    <Col className='faq-bottom-content' md={4}>
                        <div className='faq-bottom-icon-container'>
                            <MdPhonelink className='faq-bottom-icon' />
                        </div>
                        <div className='faq-bottom-desc'>
                            <h6>Cross Platform</h6>
                            <p>
                                Are you most often visited from mobile
                                devices? No problem! Our template is
                                fully responsive.
                            </p>
                        </div>
                    </Col>
                    <Col className='faq-bottom-content' md={4}>
                        <div className='faq-bottom-icon-container'>
                            <MdOutlineDashboardCustomize className='faq-bottom-icon' />
                        </div>
                        <div className='faq-bottom-desc'>
                            <h6>Customize It</h6>
                            <p>
                                Are you most often visited from mobile
                                devices? No problem! Our template is
                                fully responsive.
                            </p>
                        </div>
                    </Col>
                    <Col className='faq-bottom-content' md={4}>
                        <div className='faq-bottom-icon-container'>
                            <MdFilePresent className='faq-bottom-icon' />
                        </div>
                        <div className='faq-bottom-desc'>
                            <h6>Documentation</h6>
                            <p>
                                Are you most often visited from mobile
                                devices? No problem! Our template is
                                fully responsive.
                            </p>
                        </div>
                    </Col>
                    <Col className='faq-bottom-content' md={4}>
                        <div className='faq-bottom-icon-container'>
                            <SiProbot className='faq-bottom-icon' />
                        </div>
                        <div className='faq-bottom-desc'>
                            <h6>Chat Bots</h6>
                            <p>
                                Are you most often visited from mobile
                                devices? No problem! Our template is
                                fully responsive.
                            </p>
                        </div>
                    </Col>
                    <Col className='faq-bottom-content' md={4}>
                        <div className='faq-bottom-icon-container'>
                            <VscWorkspaceUnknown className='faq-bottom-icon' />
                        </div>
                        <div className='faq-bottom-desc'>
                            <h6>Knowledge Base</h6>
                            <p>
                                Are you most often visited from mobile
                                devices? No problem! Our template is
                                fully responsive.
                            </p>
                        </div>
                    </Col>
                    <Col className='faq-bottom-content' md={4}>
                        <div className='faq-bottom-icon-container'>
                            <MdOutlineWatchLater className='faq-bottom-icon' />
                        </div>
                        <div className='faq-bottom-desc'>
                            <h6>24/7 Support</h6>
                            <p>
                                Are you most often visited from mobile
                                devices? No problem! Our template is
                                fully responsive.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Faq;
