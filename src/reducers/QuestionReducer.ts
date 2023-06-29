import {
  GETTINGQUESTION,
  gettingQuestionAction,
  GETTINGUNANSWEREDQUESTIONS,
  gettingUnansweredQuestionsAction,
  GOTQUESTION,
  gotQuestionAction,
  GOTUNANSWEREDQUESTIONS,
  gotUnansweredQuestionsAction,
  SEARCHEDQUESTIONS,
  searchedQuestionsAction,
  SEARCHINGQUESTIONS,
  searchingQuestionsAction,
} from '../actions/QuestionActions';
import { QuestionData } from '../QuestionsData';

// state object with properties
export interface QuestionState {
  readonly loading: boolean;
  readonly unanswered: QuestionData[];
  readonly viewing: QuestionData | null;
  readonly searched: QuestionData[];
}

// app inital state
const initialQuestionState: QuestionState = {
  loading: false,
  unanswered: [],
  viewing: null,
  searched: [],
};

type QuestionActions =
  | ReturnType<typeof gettingUnansweredQuestionsAction>
  | ReturnType<typeof gotUnansweredQuestionsAction>
  | ReturnType<typeof gettingQuestionAction>
  | ReturnType<typeof gotQuestionAction>
  | ReturnType<typeof searchingQuestionsAction>
  | ReturnType<typeof searchedQuestionsAction>;

export const questionsReducer = (
  state = initialQuestionState,
  action: QuestionActions,
) => {
  switch (action.type) {
    case GETTINGUNANSWEREDQUESTIONS: {
      return {
        ...state,
        loading: true,
      };
    }
    case GOTUNANSWEREDQUESTIONS: {
      return {
        ...state,
        unanswered: action.questions,
        loading: false,
      };
    }
    case GETTINGQUESTION: {
      return {
        ...state,
        viewing: null,
        loading: true,
      };
    }
    case GOTQUESTION: {
      return {
        ...state,
        viewing: action.question,
        loading: false,
      };
    }
    case SEARCHINGQUESTIONS: {
      return {
        ...state,
        searched: [],
        loading: true,
      };
    }
    case SEARCHEDQUESTIONS: {
      return {
        ...state,
        searched: [],
        loading: false,
      };
    }
    default:
      return state;
  }

  return state;
};
