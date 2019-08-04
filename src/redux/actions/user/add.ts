import { ADD_USER } from '../../actionTypes/userTypes';

export const addUser = (data: any) => ({
  payload: data,
  type: ADD_USER,
});