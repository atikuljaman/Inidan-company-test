import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
import Banner from '../Banner/Banner/Banner';
import DeliveryFeature from '../DeliveryFeature/DeliveryFeature';
import Faq from '../Faq/Faq';
import Features from '../Features/Features';
import Partners from '../Partners/Partners';
import Tools from '../Tools/Tools';
import './Home.css';

const Home = () => {
    return (
        <>
            <Container className='home-section'>
                <Navigation />
                <Banner />
                <Features />
                <Tools />
                <DeliveryFeature />
                <Partners />
                <Faq />
            </Container>
            <Footer />
        </>
    );
};

export default Home;
