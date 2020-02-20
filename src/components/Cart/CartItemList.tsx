import React from 'react';
import json2mq from 'json2mq';
import { useMediaQuery, List } from '@material-ui/core';
import { Item } from '../../reducers/cart/types';
import CartItemMobile from './CartItemMobile';
import CartItemDesktop from './CartItemDesktop';

const CartItemList = ({ items, addItem, removeItem }: { items: Item[]; addItem: Function; removeItem: Function }) => {
  const renderMobileList = useMediaQuery(
    json2mq({
      maxWidth: 400,
    }),
  );

  const CartItem = renderMobileList ? CartItemMobile : CartItemDesktop;

  return (
    <List>
      {items.map(item => (
        <CartItem key={item.id} item={item} handleDecrease={removeItem} handleIncrease={addItem} />
      ))}
    </List>
  );
};

export default CartItemList;
