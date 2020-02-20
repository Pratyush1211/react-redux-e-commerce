import React from 'react';
import { useGetMyOrders, useOrderActions } from '../reducers/orders/hooks';
import { CircularProgress, Backdrop } from '@material-ui/core';
import { Order } from '../reducers/orders/types';
import MyOrder from '../components/MyOrders/MyOrder';

const MyOrders = () => {
  const { orders, loading, hasLoaded } = useGetMyOrders();
  const { cancelOrder } = useOrderActions();

  const handleCancelOrderClick = (order: Order) => cancelOrder(order);

  return (
    <div style={{ display: 'flex', placeContent: 'center' }}>
      {loading && !hasLoaded && <CircularProgress />}
      {loading && hasLoaded && (
        <Backdrop open={!!loading}>
          <CircularProgress />
        </Backdrop>
      )}
      {!loading && (
        <div>
          {orders.map(o => (
            <MyOrder key={o.id} order={o} handleCancelClick={handleCancelOrderClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
