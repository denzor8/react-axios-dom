import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductList = ({ getProducts, products, deleteProduct }) => {

  function someFunc() {
    console.log('Hello');
  }

  useEffect(() => {
    getProducts();
    return someFunc();
  }, []);

  return (
    <div className="container d-flex justify-content-between">
      {products.map(item => (
        <Card key={item.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.image} height="200" />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.price}</Card.Text>

            <Link to={`/edit/${item.id}`}>
              <Button variant="primary">Edit</Button>
            </Link>

            <Link to={`/details/${item.id}`}>
              <Button variant="success">Detail</Button>
            </Link>

            <Button variant="danger" onClick={() => deleteProduct(item.id)} >Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default ProductList