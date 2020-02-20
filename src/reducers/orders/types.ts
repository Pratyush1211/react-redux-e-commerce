import { Item } from '../cart/types';

export enum ActionTypes {
  setOrders = 'orders/setOrders',
  addOrder = 'orders/addOrder',
  updateOrders = 'oders/updateOrds',
  fetchStart = 'orders/fetchStart',
  fetchEnd = 'orders/fetchEnd',
}

export enum orderStatuses {
  created = 'created',
  dispatched = 'dispatched',
  canceled = 'canceled',
  completed = 'completed',
}

export interface Order {
  id: string;
  buyer: {
    id: string;
    name: string;
    surname: string;
    username: string;
  };
  status: orderStatuses;
  items: Item[];
}

export interface OrdersReducer {
  orders: Order[];
  loading: boolean;
  hasLoaded: boolean;
}
