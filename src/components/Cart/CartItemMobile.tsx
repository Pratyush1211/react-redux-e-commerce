import React from 'react';
import { Item } from '../../reducers/cart/types';
import { Typography } from '@material-ui/core';
import Price from '../Price';
import CartItemQuantity from './CartItemQuantity';
import BookImage from '../BookImage';

const CartItemMobile = ({
  item,
  handleDecrease,
  handleIncrease,
}: {
  item: Item;
  handleDecrease: Function;
  handleIncrease: Function;
}) => {
  return (
    <div key={item.id} style={{ display: 'flex', padding: 10 }}>
      <BookImage style={{ width: 100, height: 140 }} src={item.image} title={item.title} />
      <div style={{ paddingLeft: 10, display: 'flex', flexDirection: 'column' }}>
        <div style={{ paddingBottom: 10 }}>
          <Typography style={{ fontSize: 14 }} component="h3" variant="h3">
            {item.title}
          </Typography>
          <Typography style={{ fontSize: 12 }} noWrap variant="subtitle2" color="textSecondary">
            {item.author}
          </Typography>
          <Typography style={{ fontSize: 12 }} noWrap variant="subtitle2" color="textSecondary">
            {item.publishedDate}
          </Typography>
        </div>
        <div style={{ marginTop: 'auto' }}>
          <CartItemQuantity
            quantity={item.quantity}
            handleDecrease={() => handleDecrease(item)}
            handleIncrease={() => handleIncrease(item)}
          />
          <div
            style={{
              paddingTop: 10,
              fontSize: 16,
            }}
          >
            Price: <Price value={item.quantity * item.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemMobile;
