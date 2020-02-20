import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Book } from '../reducers/books/types';

const BookForm = ({ book, actions }: { book: Book; actions: Function }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [publishedDate, setPublishedDate] = useState(new Date(book.publishedDate).toISOString().split('T')[0]);
  const [image, setimage] = useState(book.image);
  const [quantity, setQuantity] = useState(book.quantity);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField type="text" value={book.id} required disabled label="id" fullWidth />
      </div>
      <div>
        <TextField
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          label="title"
          fullWidth
        />
      </div>
      <div>
        <TextField
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          required
          label="author"
          fullWidth
        />
      </div>
      <div>
        <TextField
          type="date"
          value={publishedDate}
          onChange={e => setPublishedDate(e.target.value)}
          required
          label="publishedDate"
          fullWidth
        />
      </div>
      <div>
        <img src={image} alt="book cover" />
        <TextField
          type="text"
          value={image}
          onChange={e => setimage(e.target.value)}
          required
          label="image"
          fullWidth
        />
      </div>
      <div>
        <TextField
          type="number"
          value={quantity}
          onChange={e => setQuantity(parseInt(e.target.value))}
          required
          label="quantity"
          fullWidth
        />
      </div>
      {actions({
        id: book.id,
        title,
        author,
        publishedDate,
        image,
        quantity,
      })}
    </form>
  );
};

export default BookForm;
