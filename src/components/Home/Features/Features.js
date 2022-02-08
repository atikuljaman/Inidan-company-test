import React from 'react';
import Img1 from '../../../Assets/Images/img1.png';
import './Features.css';

const Features = () => {
    return (
        <section className='feature-section'>
            <div className='feature-section-design'>
                <h5 className='feature-section-title'>Features</h5>
                <h2 className='features-section-heading'>
                    Our people make
                    <br />
                    the differences.
                </h2>
                <p className='feature-section-desc'>
                    At any time you can contact our support
                    <br />
                    center for help, because we won over 100
                    <br />
                    clients.
                </p>
                <div className='feature-section-bottom'>
                    <div className='feature-section-bottom-content'>
                        <h1>99%</h1>
                        <p> <span>Average</span> Rating</p>
                    </div>
                    <div className='feature-section-bottom-content'>
                        <h1>24/7</h1>
                        <p>Support</p>
                    </div>
                    <div className='feature-section-bottom-content'>
                        <h1>5000+</h1>
                        <p>Clients</p>
                    </div>
                </div>
                <div className='feature-section-img-container'>
                    <img className='img-fluid' src={Img1} alt='' />
                </div>
            </div>
        </section>
    );
};

export default Features;
