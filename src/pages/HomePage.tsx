import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import { useGetBooks } from '../reducers/books/hooks';
import { useAddCartItem } from '../reducers/cart/hooks';
import Cart from '../components/Cart/Cart';
import Book from '../components/HomePage/Book';

const HomePage = () => {
  const { books, loading } = useGetBooks();
  const addOrInc = useAddCartItem();
  return (
    <div>
      {loading && <CircularProgress />}
      {!loading && (
        <Grid container spacing={5}>
          <Cart />
          {books.map(book => (
            <Book key={book.id} book={book} handleClick={addOrInc} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default HomePage;
