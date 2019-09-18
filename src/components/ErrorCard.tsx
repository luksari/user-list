import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

interface IProps {
  readonly message: string;
}

const slideUp = keyframes`
    0% {
        transform: translateY(100px);
    }
    15% {
        transform: translateY(0px);
    }
    60% {
        transform: translateY(0px);
    }
    85% {
        transform: translateY(100px);
    }
    100% {
        transform: translateY(100px);
    }
`;

const ErrorWrapper = styled.div`
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
  animation: ${slideUp} 4s linear both;
`;

const ErrorCard: FC<IProps> = ({ message }) => {
  return <ErrorWrapper>{message}</ErrorWrapper>;
};

export default ErrorCard;
