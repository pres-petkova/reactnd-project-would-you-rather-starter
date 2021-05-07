import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Question from "./question/Question.js";
import Navbar from "../components/navbar/Navbar";
import "./HomePage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
      question: "",
    };
  }

  handleAnsweredClick = () => {
    this.setState({ answered: true });
  };
  handleUnansweredClick = () => {
    this.setState({ answered: false });
  };

  render() {
    const { loggedUser, questions, users } = this.props;

    const questionsToDisplay = questions.filter((q) => {
      const { optionOne, optionTwo } = q;
      const { answered } = this.state;

      const allAnswers = optionOne.votes.concat(optionTwo.votes);

      if (answered) {
        return allAnswers.includes(loggedUser);
      } else {
        return !allAnswers.includes(loggedUser);
      }
    });

    return (
      <div>
        <Navbar />
        <div className="NavbarContainer">
          <button
            className="HomePageButton"
            onClick={this.handleUnansweredClick}
          >
            UNANSWERED
          </button>
          <button className="HomePageButton" onClick={this.handleAnsweredClick}>
            ANSWERED
          </button>
        </div>
        <div>
          {questionsToDisplay.map((q) => {
            const author = users.find(u => u.id === q.author);

            return <Question key={q.id} question={{ ...q }} author={author} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const { account, questions, users } = store;

  return {
    loggedUser: account.loggedUser,
    questions: questions.questions,
    users: users.users
  };
};

export default connect(mapStateToProps)(withRouter(HomePage));
