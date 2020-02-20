import React from 'react';
import { Typography } from '@material-ui/core';
import Price from '../Price';

const CartTotals = ({ totalPrice, totalCount }: { totalPrice: number; totalCount: number }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 20 }}>
      <div style={{ display: 'flex' }}>
        <Typography variant="h5">Total Items</Typography>
        <Typography style={{ marginLeft: 'auto', fontSize: 20 }} variant="h5">
          {totalCount}
        </Typography>
      </div>
      <div style={{ display: 'flex' }}>
        <Typography variant="h5">Total Price</Typography>
        <Typography style={{ marginLeft: 'auto', fontSize: 20 }} variant="h5">
          <Price value={totalPrice} />
        </Typography>
      </div>
    </div>
  );
};

export default CartTotals;
