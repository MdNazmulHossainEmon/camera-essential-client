import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import "./Explore.css";
import { Link } from 'react-router-dom';

const Explore = () => {
    const [exploreProducts, setExploreProducts] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/products'
        fetch(url)
            .then(res => res.json())
            .then(data => setExploreProducts(data))
    }, [])
    return (
       <div>
        <Header></Header>
        <div className='py-5 explore'>
            <h2 className='text-center'>Explore The World Of Fashionable Cameras
            </h2>

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
                                    <Card className='h-100 card'>
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
                                          
                                            <Link to={`/purchase/${exploreProduct?._id}`}>
                                       <Button variant='primary'>Buy Now</Button>
                                       </Link>
                                       
                                       
                                        </Card.Body>
                                    </Card>
                                </Col>)
                            }
                        </Row>}
                </Container>
            </div>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default Explore;