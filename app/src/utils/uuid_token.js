import { v4 as uuidv4 } from 'uuid';

export const createId = () => {
  let id = localStorage.getItem('UUIDTOKEN');
  if (!id) {
    id = uuidv4();
    localStorage.setItem('UUIDTOKEN',id) 
  } else {
    id = localStorage.getItem('UUIDTOKEN');
  }
  return id
};