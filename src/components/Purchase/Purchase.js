import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import "./Purchase.css"
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import "./Purchase.css"

const Purchase = () => {
    const [product, setProduct] = useState({});
    const email = sessionStorage.getItem("email");

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const onSubmit = data => {
        data.email = email;

        fetch(`http://localhost:5000/purchase`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Your Place Order Successfully");
                }
            })
        reset();
    };



    return (
        <div>
            <Header></Header>
            <div className='py-4'>

                <Container>
                    <h2 className='mb-5 text-center purchase-title '>Place You Purchase </h2>
                    <Row className='d-flex align-items-center justify-content-center'>
                        <Col lg={7}>
                            <form onSubmit={handleSubmit(onSubmit)} className="text-center">
                                <input defaultValue={product?.name} {...register("name", { required: true })} placeholder="Product Name" className="w-75 p-2" />
                                <br />
                                <br />


                                <input defaultValue={product.img} {...register("img", { required: true })} className="w-75 p-2" placeholder="Image Url" />
                                <br />
                                <br />


                                <input defaultValue={user?.displayName} {...register("names", { required: true })} className="w-75 p-2" placeholder="User Name" />
                                <br />
                                <br />

                                <input defaultValue={user?.email} {...register("email", { required: true })} placeholder="Email" className="w-75 p-2" />
                                <br />
                                <br />

                                <input {...register("address", { required: true })} placeholder="Address" className="w-75 p-2" />
                                <br />
                                <br />

                                <input defaultValue={product?.price} {...register("price", { required: true })} placeholder="Price" className="w-75 p-2" />
                                <br />
                                <br />


                                <textarea defaultValue={product?.description} {...register("description", { required: true })} placeholder="Description" className="w-75 purchase-textarea-field p-2" />

                                <br />
                                <br />

                                <input className='btn btn-success' type="submit" value="PlaceOrder" />
                            </form>
                        </Col>

                        <Col lg={5}>

                            <Card className='border-0 text-center mt-3'>
                                <div>
                                    <Card.Img className='w-50' variant="top" src={product.img} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{product?.name}</Card.Title>
                                    <Card.Text>
                                        {product?.description}
                                    </Card.Text>
                                    <Card.Text>
                                        Price :  {product?.price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Purchase;