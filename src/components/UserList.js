import React, { Component } from 'react';

class UserList extends Component {
  render() {
    const { user } = this.props;
    const name = `${user.title} ${user.firstName} ${user.lastName}`;

    return (
      <div className='card-container'>
        <img src={user.picture} alt={name} />
        <h2>{name}</h2>
      </div>
    );
  }
}

export default UserList;
