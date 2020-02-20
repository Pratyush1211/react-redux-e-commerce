import React from 'react';
import { CircularProgress, Backdrop } from '@material-ui/core';
import { useGetMyOrders, useOrderActions } from '../reducers/orders/hooks';
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
      {!loading && hasLoaded && orders.length === 0 && <div>{`You don't have any orders`}</div>}
    </div>
  );
};

export default MyOrders;
