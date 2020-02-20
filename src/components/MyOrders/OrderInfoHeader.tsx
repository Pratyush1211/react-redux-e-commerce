import React from 'react';

const OrderInfoHeader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      fontStyle: 'italic',
      borderBottom: '1px solid gray',
    }}
  >
    <div style={{ textTransform: 'uppercase', flex: 1 }}>Created At</div>
    <div style={{ textTransform: 'uppercase', flex: 1 }}>Status </div>
    <div style={{ textTransform: 'uppercase', flex: 1, display: 'flex', justifyContent: 'flex-end' }}>Price</div>
  </div>
);

export default OrderInfoHeader;
