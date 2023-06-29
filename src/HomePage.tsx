import { AppState } from './Store';
import { css } from '@emotion/react';
import { getUnansweredQuestions } from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { PrimaryButton } from './Styles';
import { QuestionList } from './QuestionList';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  gettingUnansweredQuestionsAction,
  gotUnansweredQuestionsAction,
} from './actions/QuestionActions';

export const HomePage = () => {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state: AppState) => state.questions.unanswered,
  );
  const questionsLoading = useSelector(
    (state: AppState) => state.questions.loading,
  );

  React.useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      dispatch(gettingUnansweredQuestionsAction());

      const unansweredQuestions = await getUnansweredQuestions();

      dispatch(gotUnansweredQuestionsAction(unansweredQuestions));
    };
    doGetUnansweredQuestions();
  }, []);

  const navigate = useNavigate();

  const handleAskQuestionClick = () => {
    navigate('ask');
  };

  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <PageTitle>Unanswered Questions</PageTitle>
        <PrimaryButton onClick={handleAskQuestionClick}>
          Ask a question
        </PrimaryButton>
      </div>
      {questionsLoading ? (
        <div>Loading...</div>
      ) : (
        <QuestionList data={questions} />
      )}
    </Page>
  );
};
