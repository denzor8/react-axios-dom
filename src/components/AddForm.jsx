import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddForm = ({ addProduct }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  function createProduct() {
    let newProduct = {
      title,
      price,
      image
    };
    addProduct(newProduct);
  };

  return (
    <div>
      <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <input type="text" placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <input type="text" placeholder="Image" onChange={e => setImage(e.target.value)} />

      <Link to="/">
        <button onClick={createProduct}>Save</button>
      </Link>
    </div>
  )
}

export default AddForm