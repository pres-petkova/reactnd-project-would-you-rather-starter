import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import { connect } from "react-redux";
import "./Leaderboard.css";
import UserAvatar from "../userAvatar/UserAvatar";

class Leaderboard extends Component {
  render() {
    const { users } = this.props;

    users.sort((a, b) => {
      const questionsA =
        Object.entries(a.answers).length + Object.entries(a.questions).length;
      const questionsB =
        Object.entries(b.answers).length + Object.entries(b.questions).length;

      return questionsB - questionsA;
    });

    return (
      <div className="LeaderboardContainer">
        <Navbar />
        <div>
          {users.map((user) => (
            <div className="LeaderboardUser" key={user.id}>
              <span className="UserName"> {user.name} </span>
              <div className="AvatarPlacement">
                {" "}
                <UserAvatar user={user}></UserAvatar>{" "}
              </div>

              <p>{`answered: ${Object.entries(user.answers).length} `}</p>
              <p>{`asked: ${Object.entries(user.questions).length}`}</p>
              <p className="Score">
                {` SCORE: ${
                  Object.entries(user.answers).length +
                  Object.entries(user.questions).length
                }`}{" "}
              </p>
            </div>
          ))}
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
export default connect(mapStateToProps)(Leaderboard);
