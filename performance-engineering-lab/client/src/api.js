import axios from 'axios';

const cache = {};

export async function fetchUser(id) {
  if (cache[id]) {
    console.log('🔥 from cache');
    return cache[id];
  }
  console.log('🌐 from API');
  const res = await axios.get(`http://localhost:3000/api/users/${id}`);
  cache[id] = res.data;
  return res.data;
}
