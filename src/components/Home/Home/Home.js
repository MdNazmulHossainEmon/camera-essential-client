import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

import Banner from '../Banner/Banner';
import OurOffer from '../OurOfffer/OurOffer';
import Products from '../Proucts/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <OurOffer></OurOffer>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;