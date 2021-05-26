import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import LoadedData from "../loadedData/LoadedData";

class AuthenticatedRoute extends Component {
  render() {
    const { path, Component, location, loggedUser } = this.props;

    if (!loggedUser) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location.pathname },
          }}
        />
      );
    }

    return (
      <Route exact path={path}>
        <LoadedData>
          <Component />
        </LoadedData>
      </Route>
    );
  }
}

const mapStateToProps = (store) => {
  const { users } = store;

  return {
    loggedUser: users.user,
  };
};

export default connect(mapStateToProps)(withRouter(AuthenticatedRoute));
