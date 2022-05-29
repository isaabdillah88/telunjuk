import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import UserList from "../components/employee/UserList";
import UserSearch from "../components/employee/UserSearch";
import UserOrder from "../components/employee/UserOrder";
import Pagination from "../components/employee/Pagination";
import { actSearchUser } from "../redux/search/search.actions";
import { fetchUsers } from "../redux/user/user.actions";
import { Link } from "react-router-dom";

class EmployeePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalRecords: "",
      pageLimit: 12,
      startIndex: "",
      endIndex: "",
      order: "asc",
    };
  }

  componentDidMount() {
    this.props.onFetchUsers();

    this.setState({ totalRecords: this.props.users.length });
  }

  showUsers = (users) => {
    let result = null;

    if (users && users.length > 0) {
      result = users.map((user, index) => {
        return <UserList key={index} user={user} index={index} />;
      });
    }

    return result;
  };

  onSearch = (keyword) => {
    this.props.onSearchUser(keyword);
  };

  onChangePage = (data) => {
    this.setState({
      pageLimit: data.pageLimit,
      startIndex: data.startIndex,
      endIndex: data.endIndex,
    });
  };

  onOrder = (data) => {
    this.setState({ order: data });
  };

  render() {
    let { keyword, users } = this.props;
    const { pageLimit, startIndex, endIndex, order } = this.state;
    let rowsPerPage = [];

    if (keyword) {
      users = users.filter((user) => {
        const name = `${user.title} ${user.firstName} ${user.lastName}`;
        return name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    }

    users = users.sort((a, b) => {
      let fa = a.firstName.toLowerCase(),
        fb = b.firstName.toLowerCase();

      if (order === "asc") {
        if (fa < fb) return -1;
        if (fa > fb) return 1;
      } else {
        if (fa < fb) return 1;
        if (fa > fb) return -1;
      }

      return 0;
    });

    rowsPerPage = users.slice(startIndex, endIndex + 1);

    return (
      <Fragment>
        <div className="back-link">
          <Link to="/">Back to Homepage</Link>
        </div>
        <div className="App">
          <UserSearch onSearch={this.onSearch} keyword={this.props.keyword} />
          <UserOrder order={this.state.order} onOrder={this.onOrder} />
          <div className="card-list">{this.showUsers(rowsPerPage)}</div>
          <Pagination
            totalRecords={users.length}
            pageLimit={pageLimit}
            initialPage={1}
            pagesToShow={12}
            onChangePage={this.onChangePage}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    keyword: state.search,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchUsers: () => dispatch(fetchUsers()),
    onSearchUser: (keyword) => dispatch(actSearchUser(keyword)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage);
