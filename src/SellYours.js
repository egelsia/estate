import React, { useState, useEffect } from 'react';
import { url } from './api';
import axios from 'axios'

const SellYours = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState('');
    const [seller, setSeller] = useState('');
    const [price, setPrice] = useState('');
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const estate = {title, body, image, seller, price};
      axios.post(url, {
        title: estate.title,
        body: estate.body,
        image: estate.image,
        seller: estate.seller,
        price: estate.price
      })
      .then(response => {
        console.log(response.data);
      })
    };

    
    return (  
        <div className="create">
            <h2>Add Your Property!</h2>
        
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="body">Body:</label>
                    <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Image:</label>
                    
                    {(
                    <input
                        type="url"
                        id="imageUrl"
                        placeholder="Enter image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    )}
                </div>
                <div>
                    <label htmlFor="seller">Seller:</label>
                    <input
                    type="text"
                    id="seller"
                    value={seller}
                    onChange={(e) => setSeller(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    />
                </div>
                <button type="submit">Add Estate</button>
            </form>
        </div>

    );
}
 
export default SellYours;