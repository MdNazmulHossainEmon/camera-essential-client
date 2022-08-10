import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Product.css";

const Product = (props) => {
    const { _id, img, name, description, price } = props.product;
    return (
        <div className='product'>
            <Card className='h-100 text-center card'>
                <div className='text-center'>
                    <Card.Img className='w-50' variant="top" src={img} />
                </div>

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Price : ${price}
                    </Card.Text>
                    <Link to={`/purchase/${_id}`}>
                        <Button variant='primary'>Buy Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;