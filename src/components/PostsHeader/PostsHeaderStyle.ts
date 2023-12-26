import styled from 'styled-components';
import {
  action,
  darkBlue,
  grey,
  letterSpacingBig,
  letterSpacingSmall,
} from '../../styles/varibles';
import { button } from '../../styles/mixin';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  margin-bottom: 25px;
  background-color: ${action};
`;

export const HeaderContainer = styled.div`
  padding-top: 60px;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
`;

export const HeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
`;

export const HeaderTitle = styled.h2`
  font-size: 36px;
  font-weight: 400;
  line-height: 88.933%;
  margin-bottom: 12px;
`;

export const HeaderText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${grey};
  letter-spacing: ${letterSpacingSmall};
`;

export const HeaderButtonNext = styled(Link)`
  ${button}
  height: 42px;
  display: flex;
  text-decoration: none;
  gap: 8px;
  &:hover {
    background-color: ${darkBlue};
  }
`;

export const HeaderButtonMessengers = styled.button`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: ${grey};
  text-transform: uppercase;
  padding: 12px 40px 10px 40px;
  letter-spacing: ${letterSpacingBig};
`;
