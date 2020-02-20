import { Book } from './types';
import { crud } from '../helpers/crud';

const { getItems, createItems, updateItems, deleteItems } = crud<Book>('books');

export { getItems as getBooks };

export const postBooks = createItems;

export const putBooks = updateItems;

export const deleteBooks = deleteItems;
