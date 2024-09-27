import axios from 'axios';
import { setUsers } from './userSlice';

export const fetchUsers = () => async dispatch => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch(setUsers(response.data));
  } catch (error) {
    console.error('Failed to fetch users', error);
  }
};
