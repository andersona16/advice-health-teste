import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isDisabled?: boolean;
  hasErrors: boolean;
  isReadOnly?: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  align-items: center;

  background-color: #f3f6f9;

  height: 45px;
  max-width: 100%;
  width: 100%;

  border: 2px solid transparent;

  padding: 0 10px;

  transition: background-color 0.2s;

  & + & {
    margin-top: 8px;
  }

  > svg {
    color: #ccc;

    margin-right: 16px;

    transition: stroke 0.2s;
  }

  input {
    flex: 1;

    outline: none;

    height: 100%;

    border: none;
    border-radius: 10px;

    background-color: inherit;

    font-size: 16px;
    color: #1e1e1e;

    transition: background-color 0.2s;

    &::placeholder {
      color: #ccc;
      font-weight: 600;
    }

    &:disabled {
      background-color: #e6e9ec;
    }
  }

`;
