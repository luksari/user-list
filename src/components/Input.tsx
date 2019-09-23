import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { InputWrapper, StyledInput } from '../styled';

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
