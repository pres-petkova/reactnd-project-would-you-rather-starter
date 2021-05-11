import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { getLoggedUser, logoutUser } from "../../utils/user";
import { withRouter } from "react-router-dom";
import UserAvatar from "../userAvatar/UserAvatar";

class Navbar extends Component {
  handleLogoutClick = () => {
    const { history } = this.props;

    logoutUser();
    history.push("/login");
  };

  render() {
    const loggedUser = getLoggedUser();

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

export default withRouter(Navbar);
