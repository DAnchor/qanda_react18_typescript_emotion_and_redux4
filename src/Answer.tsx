import { AnswerData } from './QuestionsData';
import { css } from '@emotion/react';
import { gray3 } from './Styles';
import React from 'react';

interface Props {
  data: AnswerData;
}

export const Answer = ({ data }: Props) => (
  <div
    css={css`
      padding: 10px 10px;
    `}
  >
    <div
      css={css`
        padding: 10px 10px;
        font-size: 13px;
      `}
    >
      {data.content}
    </div>
    <div
      css={css`
        font-size: 12px;
        font-style: italic;
        color: ${gray3};
      `}
    >
      {`Answered by ${
        data.userName
      } on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
    </div>
  </div>
);
