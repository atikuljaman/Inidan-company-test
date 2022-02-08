import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { TiGroupOutline } from "react-icons/ti";
import { AiOutlineLock } from "react-icons/ai";
import { BsGearWideConnected } from "react-icons/bs";
import { SiProbot } from "react-icons/si";
import { MdMailOutline } from "react-icons/md";
import { RiBook2Line } from "react-icons/ri";
import './BannerFeature.css';

const BannerFeature = () => {
    return (
        <Container fluid>
            <Row className='g-4'>
                <Col md={4}>
                    <div className='feature-detail-container'>
                        <div className='feature-icon-container'>
                            <TiGroupOutline className='feature-icon' />
                        </div>
                        <h5 className='feature-title'>Accounts</h5>
                        <p className='feature-desc'>Manage an unlimited numbers of account from one place </p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='feature-detail-container'>
                        <div className='feature-icon-container'>
                            <AiOutlineLock className='feature-icon' />
                        </div>
                        <h5 className='feature-title'>Permissions</h5>
                        <p className='feature-desc'>Manage an unlimited numbers of account from one place </p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='feature-detail-container'>
                        <div className='feature-icon-container'>
                            <BsGearWideConnected className='feature-icon' />
                        </div>
                        <h5 className='feature-title'>Integration</h5>
                        <p className='feature-desc'>Manage an unlimited numbers of account from one place </p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='feature-detail-container'>
                        <div className='feature-icon-container'>
                            <SiProbot className='feature-icon' />
                        </div>
                        <h5 className='feature-title'>Chat Bots</h5>
                        <p className='feature-desc'>Manage an unlimited numbers of account from one place </p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='feature-detail-container'>
                        <div className='feature-icon-container'>
                            <MdMailOutline className='feature-icon' />
                        </div>
                        <h5 className='feature-title'>In APP Messaging</h5>
                        <p className='feature-desc'>Manage an unlimited numbers of account from one place </p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='feature-detail-container'>
                        <div className='feature-icon-container'>
                            <RiBook2Line className='feature-icon' />
                        </div>
                        <h5 className='feature-title'>Knowledge Base</h5>
                        <p className='feature-desc'>Manage an unlimited numbers of account from one place </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BannerFeature;
