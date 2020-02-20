import React from 'react';
import { IconButton, Typography } from '@material-ui/core';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';

const CartHeader = ({ handleCloseClick }: { handleCloseClick: Function }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <IconButton disabled>
        <ShoppingCartSharpIcon />
      </IconButton>
      <Typography style={{ fontSize: 24, marginTop: 10 }} variant="h4">
        Shopping Cart
      </Typography>
      <IconButton onClick={() => handleCloseClick()}>
        <CloseSharpIcon />
      </IconButton>
    </div>
  );
};

export default React.memo(CartHeader);
