import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import { Book as BookType } from '../../reducers/books/types';
import BookImage from '../BookImage';
import BookPrice from '../BookPrice';

const Book = ({ book, handleClick }: { book: BookType; handleClick: Function }) => {
  const { title, author, publishedDate, image, quantity, price } = book;
  return (
    <Grid style={{ display: 'flex', padding: 10 }} item xs={12} sm={6} md={4}>
      <BookImage title={title} src={image} />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', paddingLeft: 10 }}>
        <div>
          <Typography component="h6" variant="h6">
            {title}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {author}
          </Typography>
          <Typography noWrap variant="subtitle2" color="textSecondary">
            {publishedDate}
          </Typography>
          <Typography noWrap variant="subtitle2" color="textSecondary">
            {`Quantity: ${quantity}`}
          </Typography>
          <BookPrice value={price} />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <Grid>
            <Button variant="contained" onClick={() => handleClick(book)} color="primary">
              Add to Cart
            </Button>
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

export default Book;
