import styled from 'styled-components';
import { letterSpacingSmall, white } from '../../styles/varibles';

export const Menu = styled.div`
  z-index: 1;
  display: none;
  position: absolute;
  bottom: -80px;
  right: 0;
  width: 134px;
  height: 88px;
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px 0px rgba(0, 0, 0, 0.2);
`;
export const MenuButton = styled.button`
  background-color: ${white};
  padding: 9px 16px;
  text-align: start;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: ${letterSpacingSmall};
  transition: background-color 0.3s ease-in-out;
  width: 100%;
  &:hover {
    background-color: #f5f5f5;
  }
`;
