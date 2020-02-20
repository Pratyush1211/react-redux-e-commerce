import React from 'react';
import { Item } from '../../reducers/cart/types';
import BookImage from '../BookImage';
import BookPrice from '../BookPrice';

const OrderItems = ({ items }: { items: Item[] }) => {
  return (
    <div style={{ paddingTop: 20 }}>
      {items.map(item => (
        <div key={item.id} style={{ display: 'flex', padding: '10px 0' }}>
          <BookImage style={{ width: 100, height: 140 }} src={item.image} title={item.title} />
          <div
            style={{
              paddingLeft: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontWeight: 700 }}>{item.title}</div>
              <div style={{ paddingTop: 4, color: '#7A7878' }}>{item.author}</div>
              <div style={{ color: '#7A7878' }}>{item.publishedDate}</div>
            </div>
            <div>
              <div>
                Count:
                {item.quantity}
              </div>
              <BookPrice value={item.price * item.quantity} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderItems;
