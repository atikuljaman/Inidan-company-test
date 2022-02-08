import React from 'react';
import Img2 from '../../.././Assets/Images/img2.png';
import Img3 from '../../.././Assets/Images/img3.png';
import Img4 from '../../.././Assets/Images/img4.png';
import './Tools.css';

const Tools = () => {
    return (
        <section className='tools-section'>
            <div className='tools-section-design'>
                <h5 className='tools-section-title'>Tools</h5>
                <div className='tools-section-img-container'>
                    <img className='img-fluid' src={Img2} alt='' />
                </div>
                <h2 className='tools-section-heading'>
                    Connect the tools you
                    <br />
                    already use.
                </h2>
                <p className='tools-section-desc'>
                    Our extensive developer tools might also strike your
                    <br />
                    fancy.
                </p>
                <div className='tools-img-container'>
                    <div className='tools-img-container-top'>
                        <div className='tools-img-sub-container'>
                            <img className='img-fluid' src={Img3} alt='' />
                        </div>
                        <div className='tools-img-sub-container'>
                            <img className='img-fluid' src={Img4} alt='' />
                        </div>
                    </div>
                    <div className='tools-img-container-top'>
                        <div className='tools-img-sub-container'>
                            <img className='img-fluid' src={Img3} alt='' />
                        </div>
                        <div className='tools-img-sub-container'>
                            <img className='img-fluid' src={Img4} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
