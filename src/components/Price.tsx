import React from 'react';

const Price = ({ value }: { value: number }) => (
  <span>{`${Math.floor(value / 100)},${value % 100 < 10 ? `0${value % 100}` : value % 100} €`}</span>
);

export default React.memo(Price);
