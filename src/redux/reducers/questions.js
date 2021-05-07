import { SET_QUESTIONS } from "../action-types";

const initialState = {
  questions: [],
  selectedQuestion: undefined,
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      const { questions } = action.payload;
      const questionsArray = Object.values(questions);

      return { ...state, questions: questionsArray };
    default:
      return state;
  }
};

export default questionsReducer;
