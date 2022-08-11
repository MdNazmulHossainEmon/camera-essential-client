import React, { useEffect, useState } from 'react';
import "./ManageProducts.css";
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import "./ManageProducts.css";

const ManageProducts = () => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(()=>{
        fetch("https://murmuring-earth-49414.herokuapp.com/products")
        .then(res=> res.json())
        .then(data=> setAllProducts(data))
    },[])
    return (
        <div className='py-4 '>
            <h2 className='text-center mb-4'>Manage ALL Products {allProducts.length} </h2>

            <Container>
                {
                    allProducts?.length === 0 ? <div className='text-center'>
                        <Spinner animation="border" variant="dark" className='mb-3' />
                    </div>
                        :
                        <Row xs={1} md={2} lg={2} xl={3} className="g-4">

                            {
                                allProducts.map(allProduct => <div key={allProduct._id}>
                                    <Col className='allProducts'>
                                        <Card className='mb-3text-center card'>
                                            <div className='text-center'>
                                            <Card.Img variant="top" className='w-50' src={allProduct?.img} />
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{allProduct?.name}</Card.Title>
                                                <Card.Text>
                                                    {allProduct?.description}
                                                </Card.Text>
                                                <Card.Text>
                                                 Price :  ${allProduct?.price}
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

export default ManageProducts;