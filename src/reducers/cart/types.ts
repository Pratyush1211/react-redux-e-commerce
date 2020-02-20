import { Book } from '../books/types';

export enum ActionTypes {
  setItems = 'cart/setCart',
  addItem = 'cart/addItem',
  removeItem = 'cart/removeItem',
}

export type Item = Book;

export interface CartItems {
  id: string;
  items: Item[];
}

export interface CartReducer {
  items: Item[];
  loading: boolean;
  hasLoaded: boolean;
}
