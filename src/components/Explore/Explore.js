import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import "./Explore.css";

const Explore = () => {
    const [exploreProducts, setExploreProducts] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/products'
        fetch(url)
            .then(res => res.json())
            .then(data => setExploreProducts(data))
    }, [])
    return (
        <div className='py-5'>
            <h2 className='text-center
            '>Explore the World of fashionable Cameras </h2>

            <div className='explore-align text-center'>
                <Container>
                    {exploreProducts.length === 0 ? <div className='text-center mb-5'>
                        <Spinner animation="border" />
                    </div>
                        :
                        <Row xs={1} md={2} lg={3} className="g-4 mt-3">
                            {
                                exploreProducts.map(exploreProduct => <Col
                                    key={exploreProduct._id}
                                >
                                    <Card className='h-100 '>
                                        <div className='text-center'>
                                            <Card.Img className='w-50' variant="top" src={exploreProduct?.img} />
                                        </div>                                    <Card.Body>
                                            <Card.Title>{exploreProduct.name}</Card.Title>
                                            <Card.Text>
                                                {exploreProduct.description}
                                            </Card.Text>
                                            <Card.Text>
                                                Price : ${exploreProduct.price}
                                            </Card.Text>
                                            <Button>Buy Now</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>)
                            }
                        </Row>}
                </Container>
            </div>
        </div>
    );
};

export default Explore;