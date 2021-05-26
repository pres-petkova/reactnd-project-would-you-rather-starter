import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import { withRouter } from "react-router-dom";
import { saveQuestion } from "../../redux/actions/questions";
import "./NewQuestion.css";
import { connect } from "react-redux";

class NewQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionOne: "",
      optionTwo: "",
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOptionChange(event) {
    event.target.name === "optionOne"
      ? this.setState({ optionOne: event.target.value })
      : this.setState({ optionTwo: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { history, dispatch, loggedUser } = this.props;

    dispatch(
      saveQuestion({
        author: loggedUser.id,
        optionOneText: this.state.optionOne,
        optionTwoText: this.state.optionTwo,
      })
    );
    history.push("/home");
  }

  render() {
    return (
      <div className="NewQuestionContainer">
        <Navbar />
        <div className="NewQuestion">
          <form onSubmit={this.handleSubmit}>
            <p>WOULD YOU RATHER:</p>

            <input
              type="text"
              name="optionOne"
              placeholder="Enter Option One Here"
              onChange={this.handleOptionChange}
            />

            <p>OR</p>

            <input
              type="text"
              name="optionTwo"
              placeholder="Enter Option Two Here"
              onChange={this.handleOptionChange}
            />
            <p>
              <input
                type="submit"
                value="Submit"
                className="NewQuestionButton"
              />
            </p>
          </form>
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

export default connect(mapStateToProps)(withRouter(NewQuestion));
