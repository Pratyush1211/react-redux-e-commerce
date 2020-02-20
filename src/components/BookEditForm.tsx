import React from 'react';
import { Grid, Button } from '@material-ui/core';
import BookForm from './BookForm';
import { Book } from '../reducers/books/types';
import { useBookActions } from '../reducers/books/hooks';

const BookEditForm = ({ book }: { book: Book }) => {
  const { updateBooks, deleteBooks } = useBookActions();
  const handleDeleteClick = () => deleteBooks([book]);
  const handleUpdateClick = (updatedBook: Book) => () => updateBooks([updatedBook]);
  return (
    <BookForm
      book={book}
      actions={(updatedBook: Book) => (
        <Grid container justify="flex-end">
          <Button type="button" onClick={handleDeleteClick} color="secondary">
            Delete
          </Button>
          <Button type="button" onClick={handleUpdateClick(updatedBook)} color="primary">
            Save Changes
          </Button>
        </Grid>
      )}
    />
  );
};

export default BookEditForm;
