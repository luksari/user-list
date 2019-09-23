import React, { FC } from 'react';
import { ErrorWrapper } from '../styled';

interface IProps {
  readonly message: string;
}

const ErrorCard: FC<IProps> = ({ message }) => {
  return <ErrorWrapper>{message}</ErrorWrapper>;
};

export default ErrorCard;
