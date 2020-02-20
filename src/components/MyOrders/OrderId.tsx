import React from 'react';

const OrderId = ({ orderId }: { orderId: string }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div style={{ textTransform: 'uppercase', fontWeight: 700 }}>Order: </div>
    <div>{orderId}</div>
  </div>
);

export default OrderId;
