import { AppState } from './Store';
import { css } from '@emotion/react';
import { Page } from './Page';
import { QuestionList } from './QuestionList';
import {
  searchingQuestionsAction,
  searchedQuestionsAction,
} from './actions/QuestionActions';
import { searchQuestions, QuestionData } from './QuestionsData';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

export const SearchPage = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state: AppState) => state.questions.searched);
  const [searchParams] = useSearchParams();

  const search = searchParams.get('criteria') || '';
  React.useEffect(() => {
    const doSearch = async (criteria: string) => {
      dispatch(searchingQuestionsAction());

      const foundResults = await searchQuestions(criteria);

      dispatch(searchedQuestionsAction(foundResults));
    };

    doSearch(search);
  }, [search]);

  return (
    <Page title="Search Results">
      {search && (
        <p
          css={css`
            font-size: 16px;
            font-style: italic;
            margin-top: 0px;
          `}
        >
          for '{search}'
        </p>
      )}
      <QuestionList data={questions} />
    </Page>
  );
};
