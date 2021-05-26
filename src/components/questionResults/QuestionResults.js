import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../navbar/Navbar";
import ProgressBar from "../progressBar/ProgressBar";
import "./QuestionResults.css";

class QuestionResults extends Component {
  render() {
    const { question, loggedUser } = this.props;

    const totalVotes =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const loggedUserVoted = question.optionOne.votes.find(
      (u) => u === loggedUser
    )
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
            <div>
              {" "}
              Option One got {optionOneVotes} votes out of {totalVotes}
              <ProgressBar percentage={optionOneVotesPerc} />
            </div>
            <div>
              {" "}
              Option Two got {optionTwoVotes} votes out of {totalVotes}
              <ProgressBar percentage={optionTwoVotesPerc} />
            </div>
            <p>{loggedUserVoted ? defaultVote : ""}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const { users } = store;

  return {
    loggedUser: users.user,
  };
};

export default connect(mapStateToProps)(QuestionResults);
