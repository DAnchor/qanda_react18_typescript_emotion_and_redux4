import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const pixelsToEm = (pixel: number): string => {
  return `${(pixel / 16) * 1}em`;
};

export const gray1 = '#383737';
export const gray2 = '#5c5a5a';
export const gray3 = '#857c81';
export const gray4 = '#b9b9b9';
export const gray5 = '#e3e2e2';
export const gray6 = '#f7f8fa';

export const primary1 = '#681c41';
export const primary2 = '#824c67';

export const accent1 = '#dbb365';
export const accent2 = '#efd197';

export const fontFamily = "'Segoe UI', 'Helvetica Neue',sans-serif";
export const fontSize = pixelsToEm(16);

export const PrimaryButton = styled.button`
  background-color: ${primary2};
  border-color: ${primary2};
  border-style: solid;
  border-radius: ${pixelsToEm(5)};
  font-family: ${fontFamily};
  font-size: ${fontSize};
  padding: ${pixelsToEm(5)} ${pixelsToEm(10)};
  color: white;
  cursor: pointer;
  :hover {
    background-color: ${primary1};
  }
  :focus {
    outline-color: ${primary2};
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Fieldset = styled.fieldset`
  margin: ${pixelsToEm(10)} auto 0 auto;
  padding: ${pixelsToEm(30)};
  width: ${pixelsToEm(350)};
  background-color: ${gray6};
  border-radius: ${pixelsToEm(4)};
  border: ${pixelsToEm(1)} solid ${gray5};
  box-shadow: 0 ${pixelsToEm(3)} ${pixelsToEm(5)} 0 rgba(0, 0, 0, 0.16);
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${pixelsToEm(10)};
`;

export const FieldLabel = styled.label`
  font-weight: bold;
`;

const baseFieldCSS = css`
  box-sizing: border-box;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  margin-bottom: ${pixelsToEm(5)};
  padding: ${pixelsToEm(8)} ${pixelsToEm(10)};
  border: ${pixelsToEm(1)} solid ${gray5};
  border-radius: ${pixelsToEm(3)};
`;

export const FieldInput = styled.input`
  ${baseFieldCSS}
`;

export const FieldTextArea = styled.textarea`
  ${baseFieldCSS}
  height: ${pixelsToEm(100)}
`;

export const FieldError = styled.div`
  font-size: ${pixelsToEm(12)};
`;

export const FormButtonContainer = styled.div`
  margin: ${pixelsToEm(30)} 0 0 0;
  padding: ${pixelsToEm(20)} 0 0 0;
  border-top: ${pixelsToEm(1)} solid ${gray5};
`;

export const SubmissionSuccess = styled.div`
  margin-top: ${pixelsToEm(10)};
  color: green;
`;

export const SubmissionFailure = styled.div`
  margin-top: ${pixelsToEm(10)};
  color: red;
`;
