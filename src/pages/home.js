import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Fragment>
      <Link className='task-link' to='/tokopedia'>Tokopedia Task</Link>
      <Link className='task-link' to='/employee'>Employee Task</Link>
    </Fragment>
  );
};

export default HomePage;
