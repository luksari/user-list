import styled from 'styled-components';
import { slideUp } from '.';

export const ErrorWrapper = styled.div`
  min-width: 250px;
  transform-origin: bottom;
  position: absolute;
  height: auto;
  bottom: 0;
  color: #fff;
  font-size: 1.2rem;
  background: #bb2727;
  border-radius: 15px 15px 0 0;
  padding: 15px;
  animation: ${slideUp} 2.5s linear both;
`;
