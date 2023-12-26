import styled from 'styled-components';
import { action, letterSpacingSmall, grey, blue } from '../../styles/varibles';

export const Container = styled.div`
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
`;

export const Guide = styled.section`
  background-color: ${action};
  padding-top: 142px;
  padding-bottom: 21px;
`;

export const GuideWrap = styled.div`
  width: 27%;
`;

export const GuideTitle = styled.h2`
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: ${letterSpacingSmall};
  margin-bottom: 15px;
`;

export const GuideText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: ${letterSpacingSmall};
  color: ${grey};
`;

export const GuideLink = styled.a`
  color: ${blue};
`;
