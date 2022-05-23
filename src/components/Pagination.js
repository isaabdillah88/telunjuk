import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      totalRecords: '',
      pageLimit: '',
      totalPages: '',
      currentPage: '',
      initialPage: '',
      pagesToShow: '',
    };
  }

  componentDidMount() {
    this.setState({
      totalRecords: this.props.totalRecords,
      pageLimit: this.props.pageLimit || 12,
      totalPages: Math.ceil(this.props.totalRecords / this.props.pageLimit),
      pagesToShow: this.props.pagesToShow || 12,
      currentPage: this.props.initialPage || 1,
    });
  }

  static getDerivedStateFromProps(props, state) {
    return {
      totalRecords: props.totalRecords,
      pageLimit: props.pageLimit || 12,
      totalPages: Math.ceil(props.totalRecords / props.pageLimit),
      pagesToShow: props.pagesToShow || 12,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.totalRecords !== prevState.totalRecords ||
      this.state.pageLimit !== prevState.pageLimit
    ) {
      this.setPage(this.state.currentPage);
    }
  }

  setPage(page) {
    const { totalRecords, pageLimit, totalPages } = this.state;

    if (page < 1) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }

    this.setState({ currentPage: page });

    const startIndex = (page - 1) * pageLimit;
    const endIndex = Math.min(startIndex + pageLimit - 1, totalRecords - 1);

    this.props.onChangePage({
      pageLimit,
      totalPages,
      page,
      startIndex,
      endIndex,
    });
  }

  getPager() {
    let { pagesToShow, currentPage, totalPages } = this.state;
    let pages = [],
      startFromNumber;

    if (totalPages <= pagesToShow) {
      startFromNumber = 1;
      pagesToShow = totalPages;
    } else {
      if (currentPage <= Math.ceil(pagesToShow / 2)) {
        startFromNumber = 1;
      } else if (
        currentPage + Math.floor((pagesToShow - 1) / 2) >=
        totalPages
      ) {
        startFromNumber = totalPages - (pagesToShow - 1);
      } else {
        startFromNumber = currentPage - Math.floor(pagesToShow / 2);
      }
    }

    for (let i = 1; i <= pagesToShow; i++) {
      pages.push(startFromNumber++);
    }

    return {
      currentPage,
      totalPages,
      pages,
    };
  }

  render() {
    if (!this.state.totalRecords || this.state.totalPages === 1) return null;

    const pager = this.getPager();

    return (
      <ul className='pagination'>
        <li>
          <button
            disabled={pager.currentPage === 1 ? true : false}
            onClick={() => this.setPage(1)}
          >
            First
          </button>
        </li>
        <li>
          <button
            disabled={pager.currentPage === 1 ? true : false}
            onClick={() => this.setPage(pager.currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {pager.pages.map((page, index) => (
          <li key={index}>
            <button
              className={pager.currentPage === page ? 'active' : ''}
              onClick={() => this.setPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={pager.currentPage === pager.totalPages ? true : false}
            onClick={() => this.setPage(pager.currentPage + 1)}
          >
            Next
          </button>
        </li>
        <li>
          <button
            disabled={pager.currentPage === pager.totalPages ? true : false}
            onClick={() => this.setPage(pager.totalPages)}
          >
            Last
          </button>
        </li>
      </ul>
    );
  }
}

export default Pagination;