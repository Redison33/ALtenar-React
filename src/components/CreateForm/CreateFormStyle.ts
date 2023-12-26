import styled from 'styled-components';
import { button, formWrap } from '../../styles/mixin';
import {
  black,
  blue,
  darkBlue,
  grey,
  greyGrey,
  letterSpacingBig,
  letterSpacingSmall,
  lightGrey,
  white,
} from '../../styles/varibles';

export const Section = styled.section`
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
`;

export const Container = styled.div`
  width: 36.8%;
  padding-right: 27px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormWrap = styled.div`
  ${formWrap}
`;

export const FormTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: ${letterSpacingSmall};
  margin-bottom: 5px;
`;

export const FormText = styled.p`
  color: ${grey};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: ${letterSpacingSmall};
  margin-bottom: 24px;
`;

export const InputText1 = styled.input<{ $error: boolean }>`
  width: 100%;
  padding: 18px 32px 17px 12px;
  border: 1px solid ${greyGrey};
  border-radius: 4px;
  color: ${black};
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.15px;
  outline-color: ${blue};
  margin-bottom: 16px;
  border-color: ${(props) => (props.$error ? 'red' : '')};
`;
export const InputText2 = styled.input<{ $error: boolean }>`
  width: 100%;
  padding: 18px 32px 17px 12px;
  border: 1px solid ${greyGrey};
  border-radius: 4px;
  color: ${black};
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.15px;
  outline-color: ${blue};
  margin-bottom: 16px;
  border-color: ${(props) => (props.$error ? 'red' : '')};
`;
export const InputText3 = styled.input<{ $error: boolean }>`
  width: 100%;
  padding: 18px 32px 17px 12px;
  border: 1px solid ${greyGrey};
  border-radius: 4px;
  color: ${black};
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.15px;
  outline-color: ${blue};
  margin-bottom: 16px;
  border-color: ${(props) => (props.$error ? 'red' : '')};
`;

export const InputTextWithSvg = styled.input<{ $error: boolean }>`
  width: 100%;
  padding: 18px 32px 17px 45px;
  border: 1px solid ${greyGrey};
  border-radius: 4px;
  color: ${black};
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.15px;
  outline-color: ${blue};
  margin-bottom: 16px;
  border-color: ${(props) => (props.$error ? 'red' : '')};
`;

export const CountWrap = styled.div`
  position: relative;
`;

export const Count = styled.span`
  position: absolute;
  top: 18px;
  right: 12px;
  color: ${grey};
  font-size: 16px;
  line-height: 19px;
  letter-spacing: ${letterSpacingSmall};
`;

export const More = styled.span`
  position: absolute;
  top: 16px;
  left: 12px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 18px 12px 17px 12px;
  border: 1px solid ${greyGrey};
  border-radius: 4px;
  color: ${black};
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.15px;
  outline-color: ${blue};
  height: 133px;
  resize: none;
`;

export const InputColor = styled.input`
  width: 44px;
  height: 44px;
  border-radius: 48px;
  border: none;
  padding: 0;
  overflow: hidden;
  outline: none;
  border: 2px solid ${white};
  &:hover {
    outline: 1px solid #c4c4c4;
  }
  &:active {
    outline-color: ${blue};
  }
  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  &::-webkit-color-swatch {
    border: none;
    border-radius: 50%;
  }
`;

export const FormButton = styled.button`
  ${button}
  margin-bottom: 10px;
  &:hover {
    background-color: ${darkBlue};
  }
`;

export const FormDisclaimer = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: ${letterSpacingBig};
  text-align: center;
  color: ${grey};
  padding: 6px 51px;
`;

export const ErrorText1 = styled.span<{ $error: boolean }>`
  display: ${(props) => (props.$error ? 'block' : 'none')};
  position: absolute;
  color: #f44336;
  left: 0;
  bottom: -3px;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: ${letterSpacingBig};
`;
export const ErrorText2 = styled.span<{ $error: boolean }>`
  display: ${(props) => (props.$error ? 'block' : 'none')};
  position: absolute;
  color: #f44336;
  left: 0;
  bottom: -3px;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: ${letterSpacingBig};
`;
export const ErrorText3 = styled.span<{ $error: boolean }>`
  display: ${(props) => (props.$error ? 'block' : 'none')};
  position: absolute;
  color: #f44336;
  left: 0;
  bottom: -3px;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: ${letterSpacingBig};
`;
export const ErrorText4 = styled.span<{ $error: boolean }>`
  display: ${(props) => (props.$error ? 'block' : 'none')};
  position: absolute;
  color: #f44336;
  left: 0;
  bottom: -3px;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: ${letterSpacingBig};
`;
