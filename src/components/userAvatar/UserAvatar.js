import React, { Component } from "react";

import "./UserAvatar.css";

class UserAvatar extends Component {
  render() {
    const { user } = this.props;
    
    return (
      <div className="Avatar">
        <img
          alt="the user's avatar"
          src={user.avatarURL}
          width="50"
          height="50"
          className="AvatarImg"
        />{" "}
      </div>
    );
  }
}

export default UserAvatar;
