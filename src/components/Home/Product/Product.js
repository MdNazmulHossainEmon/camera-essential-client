import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = (props) => {
    const  {img,name,description,price} = props.product;
    return (
        <div>
            <Card className='h-100 text-center'>
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
                                        <Button>Buy Now</Button>
                                    </Card.Body>
                                </Card>
        </div>
    );
};

export default Product;