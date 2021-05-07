import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from "../../_DATA";
import { SET_QUESTIONS } from "../action-types";
import { getUsers } from "./users";

export const getQuestions = () => (dispatch) =>
  _getQuestions().then((questions) => dispatch(setQuestions(questions)));

export const setQuestions = (questions) => {
  return {
    type: SET_QUESTIONS,
    payload: { questions },
  };
};

export const saveAnswer = (answer) => (dispatch) =>
  _saveQuestionAnswer(answer).then(() => {
    dispatch(getQuestions());
    dispatch(getUsers());
  });

export const saveQuestion = (question) => (dispatch) =>
  _saveQuestion(question).then(() => {
    dispatch(getQuestions());
    dispatch(getUsers());
  });
