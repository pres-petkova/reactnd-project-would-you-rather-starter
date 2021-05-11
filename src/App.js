import { Component } from "react";
import "./App.css";
import LogIn from "./components/login/LogIn.js";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import HomePage from "./components/homePage/HomePage";
import NewQuestion from "./components/newQuestion/NewQuestion.js";
import Leaderboard from "./components/leaderboard/Leaderboard";
import AuthenticatedRoute from "./components/authenticatedRoute/AuthenticatedRoute";
import QuestionPage from "./components/questionPage/QuestionPage.js";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/login">
              <LogIn />
            </Route>
            <AuthenticatedRoute path="/add" Component={NewQuestion} />
            <AuthenticatedRoute path="/leaderboard" Component={Leaderboard} />
            <AuthenticatedRoute path="/home" Component={HomePage} />
            <AuthenticatedRoute
              path="/questions/:question_id"
              Component={QuestionPage}
            />
            <Route path="/404">
              <NotFoundPage />
            </Route>
            <Redirect to="login" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
