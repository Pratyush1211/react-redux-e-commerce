import { ActionTypes, Item } from './types';

export const cartSetItems = (items: Item[]) => ({
  type: ActionTypes.setItems,
  payload: { items },
});

export const cartAddItem = (item: Item) => ({
  type: ActionTypes.addItem,
  payload: { item },
});

export const cartRemoveItem = (item: Item) => ({
  type: ActionTypes.removeItem,
  payload: { item },
});
