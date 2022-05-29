import React from 'react';

const UserOrder = ({ order, onOrder }) => {
  return (
    <select
      name='order'
      className='search-box'
      value={order}
      onChange={(event) => onOrder(event.target.value)}
    >
      <option value='asc'>Ascending</option>
      <option value='desc'>Descending</option>
    </select>
  );
};

export default UserOrder;
