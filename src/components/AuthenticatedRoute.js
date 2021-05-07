import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

class AuthenticatedRoute extends Component {
  render() {
    const { path, user, Component, history } = this.props;

    console.log("IN HERE", user);

    if (!user) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { prevPath: history.location.pathname },
          }}
        />
      );
    }

    return (
      <Route exact path={path}>
        <Component />
      </Route>
    );
  }
}

const mapStateToProps = (store) => {
  const { account } = store;

  return {
    user: account.loggedUser,
  };
};

export default connect(mapStateToProps)(withRouter(AuthenticatedRoute));
