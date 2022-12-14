import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowReview from '../ShowReview/ShowReview';
import "./Reviews.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://murmuring-earth-49414.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='text-center pt-5 reviews'>
            <h2 className='mb-5'>Some Valuable Opinion </h2>
            <Container>
                <Row md={4} lg={4} >
                    {
                        reviews.map(review => <ShowReview
                            key={review._id}
                            review={review}
                        ></ShowReview>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Reviews;