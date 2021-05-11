import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { getQuestions } from "../../redux/actions/questions";
import { getLoggedUser } from "../../utils/user";
import QuestionDetails from "../questionDetails/QuestionDetails";
import QuestionResults from "../questionResults/QuestionResults";

class QuestionPage extends Component {
  componentDidMount() {
    const { questions, dispatch } = this.props;

    if (!questions.length) {
      dispatch(getQuestions());
    }
  }

  render() {
    const loggedUser = getLoggedUser();
    const { questions, match } = this.props;
    const questionId = match?.params?.question_id;

    if (!questions.length) return <div>Loading...</div>;

    const question = questions.find((q) => q.id === questionId);

    if (!question) return <Redirect to="/404" />;

    const answerGroup = question.optionOne.votes.concat(
      question.optionTwo.votes
    );

    return (
      <div>
        {answerGroup.includes(loggedUser.id) ? (
          <QuestionResults question={question} />
        ) : (
          <QuestionDetails question={question} />
        )}
      </div>
    );
  }
}
const mapStateToProps = (store) => {
  const { questions } = store;

  return {
    questions: questions.questions,
  };
};

export default connect(mapStateToProps)(withRouter(QuestionPage));
