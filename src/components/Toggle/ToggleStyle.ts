import styled from 'styled-components';
import { letterSpacingBig, lightGrey, darkGrey, white, greyGrey } from '../../styles/varibles';

export const ToggleBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ToggleOptionDark = styled.span<{ $theme: string }>`
  font-size: 12px;
  line-height: normal;
  letter-spacing: ${letterSpacingBig};
  color: ${(props) => (props.$theme ? `${lightGrey}` : `${darkGrey}`)};
`;
export const ToggleOptionLight = styled.span<{ $theme: string }>`
  font-size: 12px;
  line-height: normal;
  letter-spacing: ${letterSpacingBig};
  color: ${(props) => (props.$theme ? `${darkGrey}` : `${lightGrey}`)};
`;

export const ToggleWrap = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 23px;
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${darkGrey};
  border-radius: 33px;
  transition: background-color 0.3s ease-in-out;
  &:before {
    position: absolute;
    content: '';
    height: 17px;
    width: 17px;
    left: 3px;
    bottom: 3px;
    background-color: ${white};
    border-radius: 17px;
    transition: transform 0.3s ease-in-out;
  }
`;

export const ToggleInput = styled.input`
  display: none;
  &:checked + ${ToggleSlider}:before {
    transform: translateX(26px);
    filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.12))
      drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.14)) drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.2));
  }

  &:checked + ${ToggleSlider} {
    background-color: ${greyGrey};
  }
`;
