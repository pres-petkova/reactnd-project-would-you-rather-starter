import { Component } from "react";
import "./App.css";
import LogIn from "./components/LogIn.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import HomePage from "./components/HomePage.js";
import NewQuestion from "./components/NewQuestion.js";
import Leaderboard from "./components/Leaderboard";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import QuestionPage from "./components/QuestionPage.js";
import NotFoundPage from "./components/NotFoundPage";
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
          </Switch> 
        </Router>
      </Provider>
    );
  }
}

export default App;
