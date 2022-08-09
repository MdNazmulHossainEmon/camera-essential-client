import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import "./Purchase.css"

const Purchase = () => {
    const [product, setProduct] = useState({})
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const {user} = useAuth();
    const {id} = useParams();

    useEffect(()=>{
        const url =`http://localhost:5000/products/${id}`
        fetch(url)
        .then(res=> res.json())
        .then(data=> setProduct(data))
    },[])

    const onSubmit = data => {
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
        <div className='py-5'>
            <Container>
                <h2 className='mb-5 text-center purchase-title'>Place You Purchase </h2>
                <Row className='d-flex align-items-center justify-content-center'>
                    <Col lg={7}>
                        <form onSubmit={handleSubmit(onSubmit)} className="text-center">

                            <input defaultValue={user?.displayName} {...register("name", { required: true })} className="w-75" placeholder="Name" />
                            <br />
                            <br />
                            <input defaultValue={product.img} {...register("img", { required: true })} className="w-75" placeholder="Image Url" />
                            <br />
                            <br />

                            <input defaultValue={product?.name} {...register("names", { required: true })} placeholder="Name" className="w-75" />
                            <br />
                            <br />

                            <input defaultValue={user?.email} {...register("email", { required: true })} placeholder="Email" className="w-75" />
                            <br />
                            <br />

                            <input {...register("address", { required: true })} placeholder="Address" className="w-75" />
                            <br />
                            <br />

                            <textarea defaultValue={product?.description} {...register("description", { required: true })} placeholder="Description" className="w-75" />

                            <br />
                            <br />

                            <input className='btn btn-success' type="submit" value="Placeorder" />
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
    );
};

export default Purchase;