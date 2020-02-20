import React from 'react';
import { Typography } from '@material-ui/core';
import Price from './Price';

const BookPrice = ({ value, label = 'Price: ' }: { value: number; label?: string }) => (
  <Typography style={{ fontWeight: 700 }} noWrap variant="subtitle2" color="primary">
    {label}
    <Price value={value} />
  </Typography>
);

export default React.memo(BookPrice);
