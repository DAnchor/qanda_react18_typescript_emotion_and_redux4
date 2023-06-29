import { css } from '@emotion/react';
import {
  fontFamily,
  fontSize,
  gray1,
  gray2,
  gray5,
  pixelsToEm,
} from './Styles';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserIcon } from './Icons';
import React from 'react';

type FormData = {
  search: string;
};

export const Header = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormData>();
  const [searchParams] = useSearchParams();
  const criteria = searchParams.get('criteria');
  const submitForm = ({ search }: FormData) => {
    navigate(`search?criteria=${search}`);
  };

  return (
    <div
      css={css`
        position: fixed;
        box-sizing: border-box;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: ${pixelsToEm(10)} ${pixelsToEm(20)};
        background-color: #fff;
        border-bottom: ${pixelsToEm(1)} solid ${gray5};
        box-shadow: 0 ${pixelsToEm(3)} ${pixelsToEm(7)} 0
          rgba(110, 112, 114, 0.21);
      `}
    >
      <Link
        to="/"
        css={css`
          font-size: 24px;
          font-weight: bold;
          color: ${gray1};
          text-decoration: none;
        `}
      >
        Q & A
      </Link>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          /**
           * from react-hook-form^7.0.0 not necessary to wrap register method into ref=,
           * register method returns itself ref, onBlur and onChange
           */
          {...register('search')}
          type="text"
          placeholder="Search..."
          defaultValue={criteria || ''}
          css={css`
            box-sizing: border-box;
            font-family: ${fontFamily};
            font-size: ${fontSize};
            padding: ${pixelsToEm(8)} ${pixelsToEm(10)};
            border: ${pixelsToEm(1)} solid ${gray5};
            border-radius: ${pixelsToEm(3)};
            color: ${gray2};
            background-color: white;
            width: ${pixelsToEm(200)};
            height: ${pixelsToEm(30)};
            :focus {
              outline-color: ${gray5};
            }
          `}
        />
      </form>
      <Link
        to="/signin"
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          padding: ${pixelsToEm(5)} ${pixelsToEm(10)};
          background-color: transparent;
          color: ${gray2};
          text-decoration: none;
          cursor: pointer;
          :focus {
            outline-color: ${gray5};
          }
          span {
            margin-left: ${pixelsToEm(7)};
          }
        `}
      >
        <UserIcon />
        <span>Sign In</span>
      </Link>
    </div>
  );
};
