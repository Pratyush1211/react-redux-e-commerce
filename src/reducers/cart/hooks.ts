import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../rootReducer';
import { useCallback } from 'react';
import { Item } from './types';
import { cartAddItem, cartRemoveItem } from './actions';

export const useGetCartItems = () => {
  const cart = useSelector((state: RootReducer) => state.cartItems);

  return cart;
};

export const useAddCartItem = () => {
  const dispatch = useDispatch();
  const addItem = useCallback(
    (item: Item) => {
      dispatch(cartAddItem(item));
    },
    [dispatch],
  );
  return addItem;
};

export const useRemoveCartItem = () => {
  const dispatch = useDispatch();
  const addItem = useCallback(
    (item: Item) => {
      dispatch(cartRemoveItem(item));
    },
    [dispatch],
  );
  return addItem;
};
