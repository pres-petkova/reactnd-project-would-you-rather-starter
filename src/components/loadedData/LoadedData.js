import { Component } from "react";
import { getQuestions } from "../../redux/actions/questions.js";
import { getUsers } from "../../redux/actions/users.js";
import { connect } from "react-redux";

class LoadedData extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getQuestions());
    dispatch(getUsers());
  }

  render() {
    const { children } = this.props;

    return children;
  }
}

export default connect()(LoadedData);
