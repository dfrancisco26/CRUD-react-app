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

export async function getRestaurants() {
  const { data } = await client
    .from('restaurants')
    .select('*');

  return data;
}

export async function getRestaurantById(id) {
  const { data } = await client
    .from('restaurants')
    .select('*')
    .match({ id })
    .single();

  return data;
}

export async function deleteRestaurant(id) {
  const { data } = await client
    .from('restaurants')
    .delete()
    .match({ id: id })
    .single();

  return data;
}

export async function updateBook(restaurant, id) {
  const { data } = await client
    .from('restaurants')
    .update(restaurant)
    .match({ id: id })
    .single();

  return data;
}

export async function logout() {
  const { error } = await client.auth.signOut();
}