import styled from 'styled-components';
import { action, grey, letterSpacingSmall } from '../../styles/varibles';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: ${action};
`;

export const HeaderContainer = styled.div`
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
`;

export const HeaderButton = styled(Link)`
  max-width: 160px;
  margin-top: 24px;
  margin-bottom: 21px;
  color: ${grey};
  display: flex;
  gap: 8px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: ${letterSpacingSmall};
  text-decoration: none;
`;
