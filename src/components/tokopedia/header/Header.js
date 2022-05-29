import React from 'react';
import Logo from '../logo/Logo';
import CategoryList from '../category/CategoryList';
import SearchBox from '../search/SearchBox';
import CartItem from '../cart/CartItem';
import Notification from '../notification/Notification';
import Message from '../message/Message';
import Profile from '../profile/Profile';

const Header = () => {
  return (
    <div className='header'>
      <Logo />
      <CategoryList />
      <SearchBox />
      <CartItem />
      <Notification />
      <Message />
      <Profile />
    </div>
  );
};

export default Header;
