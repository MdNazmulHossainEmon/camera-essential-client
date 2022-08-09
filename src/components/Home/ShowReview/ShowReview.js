import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./ShowReview.css";

const ShowReview = ({ review }) => {
    const { name, rating, profession, description } = review;
    return (
        <Col sm={12} md={6} lg={4} className="mb-4 show-review">
            <Card className='h-100 card text-center'>
            
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {profession}
                </Card.Text>
                <Card.Text>
                    Rating : {rating}
                </Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default ShowReview;