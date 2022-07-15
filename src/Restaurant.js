import React from 'react';
import { Link } from 'react-router-dom';

export function Restaurant({ restaurant }) {
  return <><Link to={`/list/${restaurant.id}`}>
    <h2>{restaurant.name}</h2>
    <p>{restaurant.type}</p>
    <hr></hr>
    <p>Signature dish: {restaurant.signature}</p>
    <p>Rating: {restaurant.rating}</p>
  </Link></>
  ;
}
