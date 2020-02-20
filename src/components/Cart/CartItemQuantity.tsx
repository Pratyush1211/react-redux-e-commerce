import React from 'react';
import { IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const CartItemQuantity = ({
  quantity,
  handleDecrease,
  handleIncrease,
}: {
  quantity: number;
  handleDecrease: Function;
  handleIncrease: Function;
}) => (
  <div style={{ display: 'flex' }}>
    <div style={{ border: '1px solid gray', borderRadius: 15 }}>
      <IconButton style={{ width: 30 }} size="small" onClick={() => handleDecrease()}>
        <RemoveIcon />
      </IconButton>
      {quantity}
      <IconButton style={{ width: 30 }} size="small" onClick={() => handleIncrease()}>
        <AddIcon />
      </IconButton>
    </div>
  </div>
);

export default CartItemQuantity;
