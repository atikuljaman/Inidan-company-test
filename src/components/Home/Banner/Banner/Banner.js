import React from 'react';
import BannerFeature from '../BannerFeature/BannerFeature';
import './Banner.css';

const Banner = () => {
    return (
        <section className='banner-section'>
            <div className='banner-design-top'>
                <h5 className='section-title'>Welcome</h5>
                <h2 className='banner-bottom-heading'>
                    Ready to help you in
                    <br />
                    your project!
                </h2>
                <p className='banner-bottom-desc'>
                    Trio ACE International Architected Community Ecosystem World First
                    Architected Community Ecosystem
                    Which Is Automated With Three Combined Technologies Consisting BlockChain System,
                    Matrix Board System And Digital AI Signature System
                </p>
                <div className='button-container'>
                    <button className='signup-btn'>Sign Up</button>
                    <button className='login-btn'>Login</button>
                </div>
            </div>
            <div className='banner-design-center'>
                <div className='banner-feature-container container'>
                    <BannerFeature />
                </div>
            </div>
        </section >
    );
};

export default Banner;
