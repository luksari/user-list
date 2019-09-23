import styled from 'styled-components';
import { spinner } from './animations';

export const StyledLoaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffffaa;
`;

export const StyledLoader = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  will-change: transform;
  animation: ${spinner} 2s linear both infinite;
`;

export const LoaderBox = styled.span<{ readonly color: string; readonly delay: number }>`
  background: ${props => props.color};
  width: 50%;
  height: 50%;
  will-change: transform;
`;
