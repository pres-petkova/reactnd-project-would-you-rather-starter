import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Question from "../question/Question.js";
import Navbar from "../navbar/Navbar";
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
    const { questions, users, loggedUser } = this.props;

    if (!questions.length || !loggedUser || !users.length)
      return <div>Loading...</div>;

    const questionsToDisplay = questions
      .filter((q) => {
        const { optionOne, optionTwo } = q;
        const { answered } = this.state;

        const allAnswers = optionOne.votes.concat(optionTwo.votes);

        if (answered) {
          return allAnswers.includes(loggedUser.id);
        } else {
          return !allAnswers.includes(loggedUser.id);
        }
      })
      .sort((q1, q2) => q2.timestamp - q1.timestamp);

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
            const author = users.find((u) => u.id === q.author);

            return <Question key={q.id} question={{ ...q }} author={author} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const { questions, users } = store;

  return {
    questions: questions.questions,
    users: users.users,
    loggedUser: users.user,
  };
};

export default connect(mapStateToProps)(withRouter(HomePage));
