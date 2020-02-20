import React from 'react';
import { Grid, Button, CircularProgress } from '@material-ui/core';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';

const CartButton = ({
  loading,
  disabled,
  handleClick,
  totalCount,
}: {
  loading: boolean;
  disabled: boolean;
  handleClick: Function;
  totalCount: number;
}) => {
  return (
    <Grid container justify="flex-end">
      {loading && <CircularProgress />}
      <Button startIcon={<ShoppingCartSharpIcon />} disabled={disabled} onClick={() => handleClick()}>
        {`Cart: ${totalCount}`}
      </Button>
    </Grid>
  );
};

export default CartButton;
