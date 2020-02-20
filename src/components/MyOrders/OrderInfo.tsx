import React from 'react';
import Price from '../Price';

const OrderInfo = ({ createdAt, status, price }: { createdAt: string; status: string; price: number }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 600,
      paddingTop: 4,
    }}
  >
    <div style={{ textTransform: 'uppercase', flex: 1 }}>{createdAt} </div>
    <div style={{ textTransform: 'uppercase', flex: 1 }}>{status} </div>
    <div style={{ textTransform: 'uppercase', flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
      <Price value={parseInt(`${price}`)} />
    </div>
  </div>
);

export default OrderInfo;
