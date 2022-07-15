import React from 'react';
import { deleteRestaurant, getRestaurantById, updateRestaurant } from './services/fetch-utils';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';


export default function Update() {
  const { push } = useHistory();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [signature, setSignature] = useState('');
  const [rating, setRating] = useState('');

  useEffect(() => {
    async function doFetch() {
      const restaurant = await getRestaurantById(id);
      setName(restaurant.name);
      setType(restaurant.type);
      setSignature(restaurant.signature);
      setRating(restaurant.rating);
    }
    doFetch();
  }, [id]);


  async function handleDeleteRestaurant() {
    await deleteRestaurant(id);
  
    push('/list');
  }


  async function handleSubmit(e) {
    e.preventDefault();

    await updateRestaurant({
      name: name,
      type: type,
      signature: signature,
      rating: rating
    }, id);

    setName('');
    setType('');
    setSignature('');
    setRating('');

    push('/list');
  }

  return (
    <div>
      <h2>Update This Restaurant</h2>
      <form className='update-form' onSubmit={handleSubmit}>
        <label>Name
          <input onChange={e => setName(e.target.value)} value={name}></input>
        </label>
        <label>Type
          <input onChange={e => setType(e.target.value)} value={type}></input>
        </label>
        <label>Dish
          <input onChange={e => setSignature(e.target.value)} value={signature}></input>
        </label>
        <label>Rating
          <input type='number' onChange={e => setRating(e.target.value)} value={rating}></input>
        </label>
        <button>Update Restaurant</button>
      </form>
      <hr></hr>
      <button onClick={handleDeleteRestaurant} className='delete-button'>Delete Restaurant</button>
    </div>
  );
}
