import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { withRouter } from "react-router-dom";
import UserAvatar from "../userAvatar/UserAvatar";
import { logoutUser } from "../../redux/actions/users";
import { connect } from "react-redux";

class Navbar extends Component {
  handleLogoutClick = () => {
    const { history, dispatch } = this.props;

    dispatch(logoutUser());
    history.push("/login");
  };

  render() {
    const { loggedUser } = this.props;

    return (
      <nav className="NavbarItems">
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <NavLink key={index} to={item.url}>
                {item.title}
              </NavLink>
            );
          })}
        </ul>

        <div className="UserInfo">
          <UserAvatar user={loggedUser} />
          <p>Hello {loggedUser.name}! </p>
        </div>

        <button className="LogOutButton" onClick={this.handleLogoutClick}>
          LOG OUT
        </button>
      </nav>
    );
  }
}

const mapStateToProps = (store) => {
  const { users } = store;

  return {
    loggedUser: users.user,
  };
};

export default connect(mapStateToProps)(withRouter(Navbar));
