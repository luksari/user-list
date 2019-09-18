import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';

const InputWrapper = styled.div<{ readonly selected: boolean }>`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  position: relative;
  ${props =>
    props.selected &&
    css`
      &::after {
        content: '';
        width: 100%;
        height: 2px;
        background: #2a6ed6;
        position: absolute;
        bottom: 0px;
      }
    `}
`;
const StyledInput = styled.input`
  background: none;
  border: none;
  width: 300px;
  height: 100%;
  margin: 0;
  font-size: inherit;
  padding: 5px 0 5px 7px;
  border: 2px solid #4f4f4f;
  position: relative;
  &:focus {
    outline: none;
    border: 1px solid transparent;
  }
`;
interface IProps {
  readonly handleValueChange: (val: string) => void;
  readonly value: string;
}
export const Input: FC<IProps> = ({ handleValueChange, value }) => {
  const [selected, setSelected] = useState(false);
  return (
    <InputWrapper selected={selected}>
      <StyledInput
        value={value}
        placeholder={'Search by user name'}
        onChange={e => handleValueChange(e.target.value)}
        onFocus={e => setSelected(true)}
        onBlur={e => setSelected(false)}
      />
    </InputWrapper>
  );
};

export default Input;
