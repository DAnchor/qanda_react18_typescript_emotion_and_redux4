import { questionsReducer } from './reducers/QuestionReducer';
import { QuestionState } from './reducers/QuestionReducer';
import { combineReducers } from 'redux';

export interface AppState {
  readonly questions: QuestionState;
}

export const rootReducer = combineReducers<AppState>({
  questions: questionsReducer,
});
