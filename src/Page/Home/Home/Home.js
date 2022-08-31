import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Review from '../../Review/Review';
import About from '../About/About';
import Document from '../Document/Document';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Document></Document>
            <Services></Services>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;