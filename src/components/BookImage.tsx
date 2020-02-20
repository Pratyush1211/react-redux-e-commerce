import React from 'react';

const BookImage = ({ title, src, style }: { title: string; src: string; style?: React.CSSProperties }) => (
  <img
    style={{ maxWidth: '100%', maxHeight: '100%', boxShadow: '1px 0px 3px grey', ...style }}
    src={src}
    alt={`${title}`}
  />
);

export default BookImage;
