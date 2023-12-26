import styled from 'styled-components';
import { blue, letterSpacingBig, letterSpacingSmall, lightGrey } from '../../styles/varibles';

export const PostWrap = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 22px;
  img {
    width: 74px;
    height: 71px;
    border-radius: 4px;
  }
`;
export const PostWrapStatus = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 22px;
`;
export const PostWrapLink = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  margin-bottom: 22px;
`;

export const PostTitle = styled.h3`
  padding-top: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: ${letterSpacingSmall};
  margin-bottom: 3px;
`;

export const PostText = styled.p`
  font-size: 12px;
  line-height: normal;
  letter-spacing: ${letterSpacingBig};
  color: ${lightGrey};
`;

export const PostTextBig = styled.p`
  padding-top: 20px;
  font-size: 14px;
  line-height: normal;
  letter-spacing: ${letterSpacingBig};
  margin-bottom: 5px;
`;

export const PostStatus = styled.div<{ $colorStatus: boolean }>`
  margin-top: 24px;
  width: 9px;
  height: 9px;
  /* background-color: rgb(255, 152, 0); */
  background-color: ${(props) => (props.$colorStatus ? `#4CAF50` : `#FF9800`)};
  border-radius: 10px;
`;

export const PostButtonTwo = styled.button<{ $buttonStatus: boolean }>`
  width: 24px;
  height: 24px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    top: -12px;
    left: -12px;
    right: -12px;
    border-radius: 48px;
    background-color: ${(props) => (props.$buttonStatus ? `rgba(33, 150, 243, 0.24);` : ``)};
    transition: background-color, 0.3s ease-in-out;
  }
  svg {
    path {
      fill: ${(props) => (props.$buttonStatus ? `${blue}` : ``)};
    }
  }
  &:hover {
    svg {
      path {
        fill: ${(props) => (props.$buttonStatus ? `` : `${blue}`)};
      }
    }
    &::after {
      background-color: ${(props) => (props.$buttonStatus ? `` : `rgba(33, 150, 243, 0.04)`)};
    }
  }
`;

export const PostButtonOne = styled.button`
  width: 24px;
  height: 24px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    top: -12px;
    left: -12px;
    right: -12px;
    border-radius: 48px;
    transition: background-color, 0.3s ease-in-out;
  }
  &:hover {
    svg {
      path {
        fill: ${blue};
      }
    }
    &::after {
      background-color: rgba(33, 150, 243, 0.04);
    }
  }
  &:active {
    svg {
      path {
        fill: ${blue};
      }
    }
    &::after {
      background-color: rgba(33, 150, 243, 0.24);
    }
  }
`;
