import React, { Component } from "react";
import { connect } from "react-redux";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./LogIn.css";
import { logIn } from "../redux/actions/account";
import { withRouter } from "react-router-dom";
import { getQuestions } from "../redux/actions/questions.js";
import { getUsers } from "../redux/actions/users";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: undefined,
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getUsers());
  }

  handleUserSelect = (event) => {
    this.setState({
      selectedUser: event.value,
    });
  };

  handleLoginClick = () => {
    const { selectedUser } = this.state;
    const { dispatch, history } = this.props;

    if (!selectedUser) return;

    dispatch(logIn(selectedUser));
    dispatch(getQuestions());
    history.push("/home");
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
