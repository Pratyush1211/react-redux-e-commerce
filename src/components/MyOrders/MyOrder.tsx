import React, { useState } from 'react';
import { Paper, Button } from '@material-ui/core';
import { Order } from '../../reducers/orders/types';
import OrderId from './OrderId';
import OrderInfoHeader from './OrderInfoHeader';
import OrderInfo from './OrderInfo';
import OrderItems from './OrderItems';
import { useAllowedActions } from '../../reducers/users/hooks';
import { actions } from '../../allowedActionsConfig';

const MyOrder = ({ order, handleCancelClick }: { order: Order; handleCancelClick: Function }) => {
  const isAllowed = useAllowedActions();
  const [expand, setExpand] = useState(false);
  return (
    <Paper
      onClick={() => setExpand(prev => !prev)}
      style={{ padding: 20, margin: '10px 0', backgroundColor: 'white', maxWidth: 500, cursor: 'pointer' }}
    >
      <OrderId orderId={order.id} />
      <div style={{ paddingTop: 10 }}>
        <OrderInfoHeader />
        <OrderInfo
          createdAt={`${new Date().toISOString().split('T')[0]}`}
          status={`${order.status}`}
          price={order.items.reduce((sum, { price, quantity }) => (sum += price * quantity), 0)}
        />
        {expand && <OrderItems items={order.items} />}
        {isAllowed(order.status, actions.cancelMyOrder) && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 10 }}>
            <Button onClick={() => handleCancelClick(order)} color="secondary">
              Cancel Order
            </Button>
          </div>
        )}
      </div>
    </Paper>
  );
};

export default MyOrder;
