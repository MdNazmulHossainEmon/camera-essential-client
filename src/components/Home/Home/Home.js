import React from 'react';

import Banner from '../Banner/Banner';
import OurOffer from '../OurOfffer/OurOffer';
import Products from '../Proucts/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <OurOffer></OurOffer>
           
        </div>
    );
};

export default Home;