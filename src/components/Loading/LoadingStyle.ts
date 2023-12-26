import styled from 'styled-components';
import {
  lightGrey,
  letterSpacingSmall,
  blue,
  letterSpacingBig,
  grey,
  colorError,
} from '../../styles/varibles';

export const LoadingWrap = styled.label<{ $FileTarget: string; $Error: boolean }>`
  position: relative;
  /* border: 1px dashed ${lightGrey}; */
  border-radius: 4px;
  border: ${(props) =>
    props.$Error
      ? `1px dashed ${colorError}`
      : props.$FileTarget
      ? `1px solid ${lightGrey}`
      : `1px dashed ${lightGrey}`};
  padding: 35px 37px 30px;
  display: flex;
  gap: 16px;
  margin-top: 15px;
  img {
    width: 47px;
  }
  &:hover {
    border-color: ${blue};
  }
`;

export const LoadingInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  outline: 0;
  opacity: 0;
  cursor: pointer;
`;

export const LoadingTextOne = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: ${letterSpacingSmall};
`;
export const LoadingTextTwo = styled.span`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: ${letterSpacingSmall};
  color: ${blue};
`;
export const LoadingTextThree = styled.p`
  font-size: 12px;
  line-height: 20px;
  letter-spacing: ${letterSpacingBig};
  color: ${grey};
`;

export const LoadingButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const LoadingTextOneFile = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: ${letterSpacingSmall};
`;

export const LoadingTextTwoFile = styled.p`
  font-size: 12px;
  line-height: normal;
  letter-spacing: ${letterSpacingBig};
  color: ${grey};
`;

export const LoadingErrorText = styled.span`
  position: absolute;
  bottom: -23px;
  left: 0;
  right: 0;
  max-width: 219px;
  margin: 0 auto;
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  color: #621b16;
  padding: 4px 8px;
  border-radius: 4px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%),
    ${colorError};
`;

export const LoadingProgress = styled.progress`
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
`;
