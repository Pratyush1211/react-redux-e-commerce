import React from 'react';
import { ListItem, Typography } from '@material-ui/core';
import BookImage from '../BookImage';
import Price from '../Price';
import { Item } from '../../reducers/cart/types';
import CartItemQuantity from './CartItemQuantity';

const CartItem = ({
  item,
  handleDecrease,
  handleIncrease,
}: {
  item: Item;
  handleDecrease: Function;
  handleIncrease: Function;
}) => {
  return (
    <ListItem key={`${item.id}`} divider>
      <BookImage src={item.image} title={item.title} style={{ width: 55, height: 75 }} />
      <div style={{ paddingLeft: 10, paddingRight: 10 }}>
        <div style={{ flex: 1, paddingLeft: 10 }}>
          <Typography style={{ fontSize: 14, maxWidth: 140 }} component="h3" variant="h3">
            {item.title}
          </Typography>
          <Typography style={{ fontSize: 12 }} noWrap variant="subtitle2" color="textSecondary">
            {item.author}
          </Typography>
          <Typography style={{ fontSize: 12 }} noWrap variant="subtitle2" color="textSecondary">
            {item.publishedDate}
          </Typography>
        </div>
      </div>
      <div style={{ minWidth: 70, marginLeft: 'auto' }}>
        <CartItemQuantity
          quantity={item.quantity}
          handleDecrease={() => handleDecrease(item)}
          handleIncrease={() => handleIncrease(item)}
        />
      </div>
      <div
        style={{
          width: 70,
          display: 'flex',
          justifyContent: 'flex-end',
          fontWeight: 700,
          fontSize: 16,
        }}
      >
        <Price value={item.quantity * item.price} />
      </div>
    </ListItem>
  );
};

export default React.memo(CartItem);
