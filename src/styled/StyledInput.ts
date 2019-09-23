import styled, { css } from 'styled-components';
export const InputWrapper = styled.div<{ readonly selected: boolean }>`
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
export const StyledInput = styled.input`
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
