import {
  FieldContainer,
  FieldError,
  FieldLabel,
  Fieldset,
  FieldTextArea,
  FormButtonContainer,
  gray3,
  gray6,
  pixelsToEm,
  PrimaryButton,
} from './Styles';
import {
  gettingQuestionAction,
  gotQuestionAction,
} from './actions/QuestionActions';
import { AnswerList } from './AnswerList';
import { AppState } from './Store';
import { css } from '@emotion/react';
import { Page } from './Page';
import { getQuestion, postAnswer } from './QuestionsData';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

type FormData = {
  content: string;
};

export const QuestionPage = () => {
  const dispatch = useDispatch();
  const question = useSelector((state: AppState) => state.questions.viewing);
  const { questionId } = useParams();

  React.useEffect(() => {
    const doGetQuestion = async (questionId: number) => {
      dispatch(gettingQuestionAction());

      const foundQeustion = await getQuestion(questionId);

      dispatch(gotQuestionAction(foundQeustion));
    };

    if (questionId) {
      doGetQuestion(Number(questionId));
    }
  }, [questionId]);

  const {
    register,
    formState,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({ mode: 'onBlur' });

  const [successfullySubmitted, setSuccessfullySubmitted] =
    React.useState(false);

  const submitForm = async (data: FormData) => {
    const result = await postAnswer({
      questionId: question!.questionId,
      content: data.content,
      userName: 'Fred',
      created: new Date(),
    });

    setSuccessfullySubmitted(result ? true : false);
  };

  return (
    <Page>
      <div
        css={css`
          background-color: white;
          padding: 15px 20px 20px 20px;
          border-radius: 4px;
          border: 1px solid ${gray6};
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
        `}
      >
        <div
          css={css`
            font-size: 19px;
            font-weight: bold;
            margin: 10px 0 5px;
          `}
        >
          {questionId === null ? '' : question?.title}
        </div>
        {question !== null && (
          <React.Fragment>
            <p
              css={css`
                margin-top: 0px;
                background-color: white;
              `}
            >
              {question.content}
            </p>
            <div
              css={css`
                font-size: 12px;
                font-style: italic;
                color: ${gray3};
              `}
            >
              {`Asked by ${
                question.userName
              } on ${question.created.toLocaleDateString()} ${question.created.toLocaleTimeString()}`}
            </div>
            <AnswerList data={question.answers} />
            <form
              onSubmit={handleSubmit(submitForm)}
              css={css`
                margin-top: ${pixelsToEm(20)};
              `}
            >
              <Fieldset
                disabled={formState.isSubmitting || successfullySubmitted}
              >
                <FieldContainer>
                  <FieldLabel htmlFor="content">Your answer</FieldLabel>
                  <FieldTextArea
                    id="content"
                    {...register('content', { required: true, minLength: 50 })}
                  />
                  {errors.content && errors.content.type === 'required' && (
                    <FieldError>You must enter answer content</FieldError>
                  )}
                  {errors.content && errors.content.type === 'minLength' && (
                    <FieldError>
                      The content must be at least 50 characters long
                    </FieldError>
                  )}
                </FieldContainer>
                <FormButtonContainer>
                  <PrimaryButton type="submit">
                    Submit your answer
                  </PrimaryButton>
                </FormButtonContainer>
              </Fieldset>
            </form>
          </React.Fragment>
        )}
      </div>
    </Page>
  );
};
