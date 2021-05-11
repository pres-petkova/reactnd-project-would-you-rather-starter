import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Question.css";
import UserAvatar from "../userAvatar/UserAvatar"

const CLASSNAME = "Question";

class Question extends Component {
  handleQuestionClick = () => {
    const { question, history } = this.props;
    history.push(`/questions/${question.id}`);
  };

  render() {
    const { question, author } = this.props;
    const { optionOne, optionTwo } = question;
   
    return (
      <div className="QuestionContainer">
      
        <div className={CLASSNAME} onClick={this.handleQuestionClick}>
        <UserAvatar user={author}></UserAvatar> 
          {author.name} asks: <p>WOULD-YOU-RATHER</p> 
          <div className="radio">
            <label>
              <input type="radio" value="optionOne" name="answer" />
              {optionOne.text}
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="optionTwo" name="answer" />
              {optionTwo.text}
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Question);
