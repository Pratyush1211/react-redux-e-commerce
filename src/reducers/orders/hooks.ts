import { useDispatch, useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { Item } from '../cart/types';
import { apiOrderPost, apiGetOrdersByUser, apiPutOrders } from './actions';
import { orderStatuses, Order } from './types';
import { useMe } from '../me/hooks';
import { RootReducer } from '../rootReducer';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const useOrders = () => {
  return useSelector((state: RootReducer) => state.orders);
};

export const useOrderActions = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { me } = useMe();

  return {
    createOrder: (cartItems: Item[]) => {
      if (me && me.id) {
        return dispatch(
          apiOrderPost({
            id: uuid(),
            buyer: {
              id: me.id,
              name: me.name,
              surname: me.surname,
              username: me.username,
            },
            status: orderStatuses.created,
            items: cartItems,
          }),
        );
      }
      return history.push('/login');
    },
    cancelOrder: (order: Order) => dispatch(apiPutOrders([{ ...order, status: orderStatuses.canceled }])),
    dispatchOrder: (order: Order) => dispatch(apiPutOrders([{ ...order, status: orderStatuses.dispatched }])),
    completeOrder: (order: Order) => dispatch(apiPutOrders([{ ...order, status: orderStatuses.completed }])),
    updateOrder: (order: Order) => dispatch(apiPutOrders([order])),
  };
};

export const useGetMyOrders = () => {
  const dispatch = useDispatch();
  const me = useMe();
  const orders = useSelector((state: RootReducer) => state.orders);

  useEffect(() => {
    if (!orders.hasLoaded && !orders.loading && me.me && me.me.id) {
      dispatch(apiGetOrdersByUser(me.me.id));
    }
  });

  return {
    ...orders,
    loading: me.loading || orders.loading,
  };
};

export const useGetOrdersByUserId = (userId: string) => {
  const [fetched, setFecthed] = useState(false);
  const dispatch = useDispatch();
  const { orders, loading, hasLoaded } = useSelector((state: RootReducer) => state.orders);

  useEffect(() => {
    if (userId && !fetched && !loading) {
      setFecthed(true);
      dispatch(apiGetOrdersByUser(userId));
    }
  }, [userId, loading, dispatch, fetched]);

  return {
    orders,
    loading,
    hasLoaded,
  };
};
