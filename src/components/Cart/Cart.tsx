import React, { useState, useCallback } from 'react';

import { Grid, Drawer, Button } from '@material-ui/core';
import { useOrders, useOrderActions } from '../../reducers/orders/hooks';
import CartHeader from './CartHeader';
import { useGetCartItems, useAddCartItem, useRemoveCartItem } from '../../reducers/cart/hooks';
import CartItemList from './CartItemList';
import CartButton from './CartButton';
import CartTotals from './CartTotals';

const Cart = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { items } = useGetCartItems();
  const addItem = useAddCartItem();
  const removeItem = useRemoveCartItem();
  const { loading } = useOrders();

  const { createOrder } = useOrderActions();

  const total = items.reduce((sum, { quantity }) => (sum += quantity), 0);
  const totalPrice = items.reduce((sum, { price, quantity }) => (sum += price * quantity), 0);

  const handleOpenDrawer = () => total > 0 && setOpenDrawer(true);
  const handleCloseDrawer = useCallback(() => setOpenDrawer(false), []);
  const handleCreateOrderClick = () => {
    setOpenDrawer(false);
    return createOrder(items);
  };

  return (
    <>
      <CartButton
        loading={loading}
        disabled={items.length === 0 || loading}
        handleClick={handleOpenDrawer}
        totalCount={total}
      />
      <Drawer anchor="right" open={openDrawer} onClose={handleCloseDrawer}>
        <CartHeader handleCloseClick={handleCloseDrawer} />
        <CartItemList items={items} addItem={addItem} removeItem={removeItem} />
        <CartTotals totalCount={total} totalPrice={totalPrice} />
        <Grid style={{ padding: 20 }} container justify="space-between">
          <Button fullWidth onClick={handleCreateOrderClick} variant="contained" color="primary">
            Create Order
          </Button>
        </Grid>
      </Drawer>
    </>
  );
};

export default Cart;
