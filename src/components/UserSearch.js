import React, { Component } from 'react';

class UserSearch extends Component {
  constructor(props) {
    super(props);

    this.state = { keyword: '' };
  }

  componentDidMount(nextProps) {
    if (nextProps && nextProps.keyword) {
      this.setState({ keyword: nextProps.keyword });
    }
  }

  onHandleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });

    const timer = setTimeout(() => {
      this.props.onSearch(this.state.keyword);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  };

  render() {
    return (
      <input
        type='text'
        name='keyword'
        className='search-box'
        placeholder='Search User'
        autoComplete='off'
        value={this.state.keyword}
        onChange={this.onHandleChange}
      />
    );
  }
}

export default UserSearch;
