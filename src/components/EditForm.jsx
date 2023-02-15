import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditForm = ({ getOneProduct, oneProduct, updateProduct } ) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    console.log(oneProduct);
    if(oneProduct) {
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setImage(oneProduct.image);
    };
  }, [oneProduct, ]);

  function saveChanges() {
    let editedProduct = {
      title,
      price,
      image
    };
    updateProduct(id, editedProduct);
  };

  return (
    <div>
      <input type="text" value={title} placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <input type="text" value={price} placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <input type="text" value={image} placeholder="Image" onChange={e => setImage(e.target.value)} />

      <Link to="/">
        <button onClick={saveChanges}>Save</button>
      </Link>
    </div>
  )
}

export default EditForm