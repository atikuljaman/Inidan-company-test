import React from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import Img6 from '../../../Assets/Images/img6.png';
import './DeliveryFeature.css';

const DeliveryFeature = () => {
    return (
        <section className='delivery-feature-section'>
            <div className='delivery-feature-design'>
                <h5 className='delivery-feature-section-title'>Delivery</h5>
                <h2 className='delivery-feature-section-heading'>
                    Delivery instant answer
                    <br />
                    with knowledge base.
                </h2>
                <p className='delivery-feature-section-desc'>
                    Create and publish answers for customers and
                    reduce your customer support volume at least
                    20%. Happier customers, fewer conversations
                    everyone wins.
                </p>
                <div className='delivery-feature-bottom-content'>
                    <div>
                        <h4 className='delivery-bottom-title'>
                            <BsQuestionCircle className='delivery-bottom-icon' />
                            Launch a help center website
                        </h4>
                        <p className='delivery-bottom-desc'>
                            Your knowledge base software has an auto
                            generated sitemap and configurable SEO
                            options for each article.
                        </p>
                    </div>
                    <div>
                        <h4 className='delivery-bottom-title'>
                            <BsQuestionCircle className='delivery-bottom-icon' />
                            Deliver instant answer
                        </h4>
                        <p className='delivery-bottom-desc'>
                            Your knowledge base software has an auto
                            generated sitemap and configurable SEO
                            options for each article.
                        </p>
                    </div>
                </div>
                <div className='delivery-section-img-container'>
                    <img className='img-fluid' src={Img6} alt='' />
                </div>
            </div>
        </section>
    );
};

export default DeliveryFeature;
