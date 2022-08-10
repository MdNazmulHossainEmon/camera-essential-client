import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./MyOrders.css"
const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const email = sessionStorage.getItem("email");
    useEffect(() => {

        fetch(`http://localhost:5000/purchase/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    // delete an user
    const handleDeleteUser = id => {
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            const url = `http://localhost:5000/purchase/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingUsers = orders.filter(order => order._id !== id)
                        setOrders(remainingUsers);
                    }
                })
        }

    }

    return (

        <div>
            {/* <Header></Header> */}
            <div className='py-5'>
                <h2 className='text-center mb-5'>My Orders : {orders.length} </h2>

                <Container>
                    <Row xs={1} md={2} lg={3} >

                        {
                            orders.map(order => <div key={order._id}>
                                <Col className='text-center order-card'>
                                    <Card className='mb-4 card'>
                                        <div className='text-center'>
                                            <Card.Img variant="top" className='w-50' src={order?.img} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{order?.name}</Card.Title>
                                            <Card.Text>
                                                {order?.description}
                                            </Card.Text>
                                            <Button variant='danger' onClick={() => handleDeleteUser(order?._id)}>Delete
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>)
                        }
                    </Row>
                </Container>

            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default MyOrders;