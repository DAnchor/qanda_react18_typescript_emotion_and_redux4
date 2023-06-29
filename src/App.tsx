import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { css } from '@emotion/react';
import { fontFamily, fontSize, gray2 } from './Styles';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { NotFoundPage } from './NotFoundPage';
import { Provider } from 'react-redux';
import { QuestionPage } from './QuestionPage';
import { rootReducer } from './Store';
import { SearchPage } from './SearchPage';
import { SignInPage } from './SignInPage';
import React from 'react';
const AskPage = React.lazy(() => import('./AskPage'));
const store = configureStore({
  reducer: rootReducer,
  /**
   * Removing Redux serialization check here due the real
   * API data is not retreived, but data mock instead:
   * https://redux-toolkit.js.org/api/getDefaultMiddleware#:%7E:text=One%20of%20the%20goals%20of,checks%20for%20two%20common%20issues%3A&text=(Forked%20from%20redux%2Dimmutable%2Dstate%2Dinvariant%20.)
   * @param getDefaultMiddleware
   * @returns
   */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div
          css={css`
            font-family: ${fontFamily};
            font-size: ${fontSize};
            color: ${gray2};
          `}
        >
          <Header />
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route
              path="ask"
              element={
                <React.Suspense
                  fallback={
                    <div
                      css={css`
                        margin-top: 100px;
                        text-align: center;
                      `}
                    ></div>
                  }
                >
                  <AskPage />
                </React.Suspense>
              }
            />
            <Route path="signin" element={<SignInPage />} />
            <Route path="questions/:questionId" element={<QuestionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
