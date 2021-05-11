import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { getLoggedUser } from "../../utils/user";
import LoadedData from "../loadedData/LoadedData";

class AuthenticatedRoute extends Component {
  render() {
    const loggedUser = getLoggedUser();
    const { path, Component, location } = this.props;

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

export default withRouter(AuthenticatedRoute);
