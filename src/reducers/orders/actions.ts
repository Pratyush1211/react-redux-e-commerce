import { Order, ActionTypes } from './types';
import { AppThunk } from '../store';
import { postOrders, getOrdersByUser, putOrders } from './crud';
import { cartSetItems } from '../cart/actions';

export const setOrders = (orders: Order[]) => ({
  type: ActionTypes.setOrders,
  payload: { orders },
});

export const addOrder = (order: Order) => ({
  type: ActionTypes.addOrder,
  payload: { order },
});

export const updateOrders = (orders: Order[]) => ({
  type: ActionTypes.updateOrders,
  payload: { orders },
});

export const ordersFetchStart = () => ({
  type: ActionTypes.fetchStart,
});

export const ordersFetchEnd = () => ({
  type: ActionTypes.fetchEnd,
});

export const apiGetOrdersByUser = (userId: string): AppThunk => async dispatch => {
  dispatch(ordersFetchStart());
  try {
    const orders = await getOrdersByUser(userId);
    dispatch(setOrders(orders));
    dispatch(ordersFetchEnd());
  } catch (e) {
    console.log(e);
    dispatch(ordersFetchEnd());
  }
};

export const apiOrderPost = (order: Order): AppThunk => async dispatch => {
  dispatch(ordersFetchStart());
  try {
    const orders = await postOrders([order]);
    dispatch(addOrder(orders[0]));
    dispatch(cartSetItems([]));
    dispatch(ordersFetchEnd());
  } catch (e) {
    console.log(e);
    dispatch(ordersFetchEnd());
  }
};

export const apiPutOrders = (orders: Order[]): AppThunk => async dispatch => {
  dispatch(ordersFetchStart());
  try {
    await putOrders(orders);
    dispatch(updateOrders(orders));
    dispatch(ordersFetchEnd());
  } catch (e) {
    console.log(e);
    dispatch(ordersFetchEnd());
  }
};
