import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { logOut } from "../../redux/actions/account";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserAvatar from "../UserAvatar";

class Navbar extends Component {
  handleLogoutClick = () => {
    const { dispatch, history } = this.props;
    dispatch(logOut());
    history.push("/");
  };

  render() {
    const { user } = this.props;

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
          <UserAvatar user={user}/>
          <p>Hello {user.name}! </p>
        </div>
        
        <button className="LogOutButton" onClick={this.handleLogoutClick}>
          LOG OUT
        </button>
      </nav>
    );
  }
}

const mapStateToProps = (store) => {
  const { account, users } = store;

  return {
    user: users.users.find((user) => user.id === account.loggedUser),
  };
};

export default connect(mapStateToProps)(withRouter(Navbar));
