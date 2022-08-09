import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./OurOffer.css";

const OurOffer = () => {
    return (
        <Container className='our-offer py-4'>
            <Row className='d-flex  align-items-center'>
                <Col sm={12} md={12} lg={6} className="text-center">
                    <h2>SUBSCRIBE OUR NEWLETTER</h2>
                    <h4 className='m-3'>GET UPDATE FOR NEWS, OFFERS
                    </h4>
                    <input type="emai" placeholder='Email' />
                </Col>

                <Col sm={12} md={12} lg={6}>
                    <img className='w-100' src="https://i.postimg.cc/PqBCYNy9/pexels-math-249597-1.jpg" alt="" />
                </Col>

            </Row>
        </Container>
    );
};

export default OurOffer;