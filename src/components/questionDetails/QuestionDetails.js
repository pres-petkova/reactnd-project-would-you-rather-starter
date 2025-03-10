import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { saveAnswer } from "../../redux/actions/questions";
import Navbar from "../navbar/Navbar";
import "./QuestionDetails.css";
import UserAvatar from "../userAvatar/UserAvatar";

class QuestionDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ answer: event.target.value });
  }

  handleSubmit() {
    const { match, dispatch, loggedUser } = this.props;
    const { answer } = this.state;
    const questionId = match?.params?.question_id;

    dispatch(
      saveAnswer({ authedUser: loggedUser.id, qid: questionId, answer })
    );
  }

  render() {
    const { question, users } = this.props;
    if (!question || !users.length) return <div>Loading...</div>;

    const questionAuthor = users.find((u) => u.id === question.author);
    const { optionOne, optionTwo } = question;

    return (
      <div>
        <Navbar />
        <div className="Container">
          <div className="QuestionDetailsContainer">
            <UserAvatar user={questionAuthor} />
            <span>@{question.author} asks WOULD-YOU-RATHER:</span>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="optionOne"
                  name="answer"
                  onChange={this.handleChange}
                />
                {optionOne?.text}
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="optionTwo"
                  name="answer"
                  onChange={this.handleChange}
                />
                {optionTwo?.text}
              </label>
            </div>
            <br />
            <button
              className="QuestionDetailsButton"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const { users } = store;

  return {
    users: users.users,
    loggedUser: users.user,
  };
};

export default connect(mapStateToProps)(withRouter(QuestionDetails));
