import React, { Component } from "react";
import { connect } from "react-redux";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./LogIn.css";
import { withRouter } from "react-router-dom";
import { getUsers, setLoggedUser } from "../../redux/actions/users";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUserId: undefined,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getUsers());
  }

  handleUserSelect = (event) => {
    this.setState({
      selectedUserId: event.value,
    });
  };

  handleLoginClick = async () => {
    const { selectedUserId } = this.state;
    const { users, history, location, dispatch } = this.props;
    const { from } = location?.state ?? { from: "/home" };

    if (!selectedUserId) return;

    const selectedUser = users.find((u) => u.id === selectedUserId);

    await dispatch(setLoggedUser(selectedUser));
    history.push(from);
  };

  render() {
    const options = this.props.users.map((user) => user.id);
    const defaultOption = "";

    return (
      <div className="Login">
        <h2 className="Font">Welcome to WOULD-YOU-RATHER!</h2>
        <div className="LoginDropdownContainer">
          <Dropdown
            options={options}
            onChange={this.handleUserSelect}
            value={defaultOption}
            placeholder="Select a user"
            className="LogInDropdown"
          />
          <button className="LogInButton" onClick={this.handleLoginClick}>
            LOG IN
          </button>{" "}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const { users } = store;

  return {
    users: users.users,
  };
};

export default connect(mapStateToProps)(withRouter(LogIn));
