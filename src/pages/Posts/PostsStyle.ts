import styled from 'styled-components';
import { letterSpacingBig } from '../../styles/varibles';

export const Container = styled.div`
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
`;

export const PostsGridTitle = styled.div`
  display: grid;
  grid-template-columns: 3.95fr 1.7fr 96px;
`;

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: 3.95fr 1.7fr 96px;
  padding: 11px 0;
`;

export const GridTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: start;
  padding: 0 0 12px 0;
`;
