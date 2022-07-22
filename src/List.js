import { useEffect, useState } from 'react';
import { getRestaurants } from './services/fetch-utils';
import { Restaurant } from './Restaurant';


export default function List() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function doFetch() {
      const restaurants = await getRestaurants();

      setRestaurants(restaurants);

    }
    doFetch();

  }, []);

  return (
    <div>
      {
        restaurants.map((restaurant, i) => <Restaurant restaurant={restaurant} key={restaurant.name + restaurant.id + i} />)
      }
    </div>
  );
}
