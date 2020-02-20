import { ReducerAction } from '../store';
import { ActionTypes, CartReducer } from './types';

const initialState = {
  items: [],
  loading: false,
  hasLoaded: false,
};

const reducer = (state = initialState as CartReducer, { type, payload }: ReducerAction): CartReducer => {
  switch (type) {
    case ActionTypes.setItems: {
      return { ...state, items: payload.items };
    }
    case ActionTypes.addItem: {
      const { items } = state;
      const existingItem = items.find(({ id }) => id === payload.item.id);
      if (existingItem) {
        return {
          ...state,
          items: items.map(item =>
            item.id === existingItem.id ? { ...existingItem, quantity: existingItem.quantity + 1 } : item,
          ),
        };
      }
      return { ...state, items: [...state.items, { ...payload.item, quantity: 1 }] };
    }
    case ActionTypes.removeItem: {
      const { items } = state;
      const existingItem = items.find(({ id }) => id === payload.item.id);
      if (existingItem && existingItem.quantity > 1) {
        return {
          ...state,
          items: items.map(item =>
            item.id === existingItem.id ? { ...existingItem, quantity: existingItem.quantity - 1 } : item,
          ),
        };
      }
      return { ...state, items: items.filter(item => item.id !== payload.item.id) };
    }
    default:
      return state;
  }
};

export default reducer;
