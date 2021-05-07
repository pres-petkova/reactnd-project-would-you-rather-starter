import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import QuestionDetails from "./QuestionDetails";
import QuestionResults from "./QuestionResults";

class QuestionPage extends Component {
  render() {
    const { questions, user, match } = this.props;

    if (!questions) return null;

    const questionId = match?.params?.question_id;
    const question = questions.find((q) => q.id === questionId);

    if (!question) return <Redirect to="/404" />;

    const answerGroup = question.optionOne.votes.concat(
      question.optionTwo.votes
    );

    return (
      <div>
        {answerGroup.includes(user) ? (
          <QuestionResults question={question} />
        ) : (
          <QuestionDetails question={question} />
        )}
      </div>
    );
  }
}
const mapStateToProps = (store) => {
  const { account, questions } = store;

  return {
    user: account.loggedUser,
    questions: questions.questions,
  };
};

export default connect(mapStateToProps)(withRouter(QuestionPage));
