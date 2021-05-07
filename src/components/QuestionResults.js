import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./navbar/Navbar";
import ProgressBar from "./progressBar/ProgressBar";
import "./QuestionResults.css";

class QuestionResults extends Component {
  render() {
    const { question, user } = this.props;
    const totalVotes =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const loggedUserVoted = question.optionOne.votes.find((u) => u === user)
      ? "You voted for Option One"
      : "You voted for Option Two";
    const defaultVote = !loggedUserVoted ? "You have not voted yet" : "";
    const optionOneVotesPerc = (optionOneVotes / totalVotes) * 100;
    const optionTwoVotesPerc = (optionTwoVotes / totalVotes) * 100;

    return (
      <div>
        <Navbar />
        <div className="BiggerContainer">
          <div className="QuestionResultsContainer">
            <p>{loggedUserVoted}</p>
            <p>People voted: {totalVotes}</p>
            <p>
              {" "}
              Option One got {optionOneVotes} votes out of {totalVotes}
              <ProgressBar percentage={optionOneVotesPerc} />
            </p>
            <p>
              {" "}
              Option Two got {optionTwoVotes} votes out of {totalVotes}
              <ProgressBar percentage={optionTwoVotesPerc} />
            </p>
            <p>{loggedUserVoted ? defaultVote : ""}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const { account } = store;

  return {
    user: account.loggedUser,
  };
};

export default connect(mapStateToProps)(QuestionResults);
