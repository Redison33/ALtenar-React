import styled from 'styled-components';
import { black, darkGrey, greyGrey, letterSpacingSmall, white } from '../../styles/varibles';

export const Section = styled.section`
  position: fixed;
  z-index: 100;
  max-width: 981px;
  width: 59.1%;
  height: 864px;
  background-color: ${darkGrey};
  border-radius: 16px;
  top: 16px;
  right: 16px;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 93px;
`;

export const Mobile = styled.div`
  border: 8px solid ${greyGrey};
  width: 356px;
  height: 633px;
  background-color: #9197a3;
  border-radius: 45px;
`;

export const Display = styled.div`
  position: relative;
  height: 100%;
`;

export const DisplayTop = styled.div``;

export const DisplayBottom = styled.div`
  position: relative;
  height: 100%;
  img {
    width: 100%;
    border-radius: 40px 40px 0 0;
  }
`;

export const DisplayTime = styled.p<{ $theme: string }>`
  z-index: 1;
  top: 19px;
  left: 27px;
  position: absolute;
  font-size: 10px;
  font-weight: 600;
  /* color: ${white}; */
  color: ${(props) => (props.$theme ? `${white}` : `${black}`)};
`;

export const DisplayIndicator = styled.div<{ $theme: string }>`
  z-index: 1;
  top: 21px;
  right: 25px;
  position: absolute;
  display: flex;
  gap: 6px;
  svg {
    path {
      fill: ${(props) => (props.$theme ? `${white}` : `${black}`)};
    }
  }
`;

export const DisplayContent = styled.div<{ $color: string }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: end;
  bottom: 0;
  width: 100%;
  height: 355px;
  padding: 39px 24px;
  /* background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #9197a3 22.4%, #9197a3 100%); */
  background: ${(props) =>
    `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${props.$color} 22.4%, ${props.$color} 100%)`};
  border-radius: 0 0 40px 40px;
`;

export const DisplayTitle = styled.h2<{ $theme: string }>`
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: ${letterSpacingSmall};
  margin-bottom: 10px;
  color: ${(props) => (props.$theme ? `${white}` : `${black}`)};
`;

export const DisplayText = styled.p<{ $theme: string }>`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: ${letterSpacingSmall};
  height: 160px;
  color: ${(props) => (props.$theme ? `${white}` : `${black}`)};
`;
