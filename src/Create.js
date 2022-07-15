import React from 'react';
import { useState } from 'react';
import { createRestaurant } from './services/fetch-utils.js';
import { useHistory } from 'react-router-dom';

export default function Create() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [signature, setSignature] = useState('');
  const [rating, setRating] = useState(''); 
  const { push } = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const restaurant = await createRestaurant({
      name: name,
      type: type,
      rating: rating,
      signature: signature
    });


    console.log(restaurant);

    setName('');
    setType('');
    setSignature('');
    setRating('');

    push('list');
  }

  return (
    <div>
      <h2>Add a restaurant</h2>
      <form className='add-form' onSubmit={handleSubmit}>
        <label>Name of restaurant
          <input onChange={e => setName(e.target.value)} value={name}></input>
        </label>
        <label>Type
          <input onChange={e => setType(e.target.value)} value={type}></input>
        </label>
        <label>Best Dish
          <input onChange={e => setSignature(e.target.value)} value={signature}></input>
        </label>
        <label>Rating#
          <input type='number' onChange={e => setRating(e.target.value)} value={rating}></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
