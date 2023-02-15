import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Details = ({ getOneProduct, oneProduct }) => {

  const params = useParams();

  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  return (
    <div className="container">
      {oneProduct ? (
        <>
          <div>{oneProduct.title}</div>
          <div>{oneProduct.price}</div>
          <img src={oneProduct.image} alt="error:(" width="250" height="250" />
        </>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  )
}

export default Details