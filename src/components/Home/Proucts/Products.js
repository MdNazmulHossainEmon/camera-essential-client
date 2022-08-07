import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';
import "./Products.css";

const Products = () => {
    const limit = 6;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/products/query?limit=${limit}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='py-4'>
            <h2 className='text-center'>Explore the World of fashionable Cameras</h2>
            <Container>
                    { products.length === 0 ? <div className='text-center mb-5'>  
                    <Spinner animation="border" />
                   </div>

                    :    <Row xs={1} md={2} lg={3} className="g-4 mt-4">
            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                >
                </Product>)
            }

</Row>}
                </Container>
        </div>
    );
};

export default Products;