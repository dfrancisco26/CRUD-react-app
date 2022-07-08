import { client } from './client';


export async function createRestaurant(restaurant) {
  const { data } = await client
    .from('restaurants')
    .insert(restaurant)
    .single();

  return data;
}


export async function signUp(email, password) {


  const { user } = await client.auth.signUp({
    email: email,
    password: password,
  });

  return user;
}

export async function signIn(email, password) {
  const { user } = await client.auth.signIn({
    email: email,
    password: password,
  });
    
  return user;
}
    
    
