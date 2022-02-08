import React from 'react';
import Img3 from '../../../Assets/Images/img3.png';
import Img4 from '../../../Assets/Images/img4.png';
import Img8 from '../../../Assets/Images/img8.png';
import Img9 from '../../../Assets/Images/img9.png';
import Img10 from '../../../Assets/Images/img10.png';
import './Partners.css';

const Partners = () => {
    return (
        <section className='partners-section'>
            <h5 className='partners-section-title'>partners</h5>
            <h2 className='partners-section-heading'>
                Trusted by more than 5,000 businesses in 122 countries.
            </h2>
            <div className='partners-img-container'>
                <img className='img-fluid' src={Img3} alt='' />
                <img className='img-fluid' src={Img4} alt='' />
                <img className='img-fluid' src={Img8} alt='' />
                <img className='img-fluid' src={Img9} alt='' />
                <img className='img-fluid' src={Img10} alt='' />
            </div>
        </section>
    );
};

export default Partners;
