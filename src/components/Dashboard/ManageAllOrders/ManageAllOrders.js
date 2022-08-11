import React, { useEffect, useState } from 'react';
import "./ManageAllOrders.css";
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
const ManageAllOrders = () => {
    const [allOrderProducts, setAllOrderProducts] = useState([]);
    useEffect(() => {
        fetch("https://murmuring-earth-49414.herokuapp.com/purchase")
            .then(res => res.json())
            .then(data => setAllOrderProducts(data))
    }, [])
    return (
        <div className='text-center py-5'>
            <h2 className='mb-4'>All Order Products {allOrderProducts.length} </h2>
            <Container>
                {
                    allOrderProducts?.length === 0 ? <div className='text-center'>
                        <Spinner animation="border" variant="dark" className='mb-3' />
                    </div>
                        :
                        <Row xs={1} md={2} lg={2} xl={3} className="g-4">

                            {
                                allOrderProducts.map(allOrderProduct => <div key={allOrderProduct._id}>
                                    <Col className='allProducts'>
                                        <Card className='mb-3text-center card'>
                                            <div className='text-center'>
                                                <Card.Img variant="top" className='w-50' src={allOrderProduct?.img} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{allOrderProduct?.name}</Card.Title>
                                                <Card.Text>
                                                    {allOrderProduct?.description}
                                                </Card.Text>
                                                <Card.Text>
                                                    Price :  ${allOrderProduct?.price}
                                                </Card.Text>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </div>)
                            }
                        </Row>
                }
            </Container>
        </div>
    );
};

export default ManageAllOrders;