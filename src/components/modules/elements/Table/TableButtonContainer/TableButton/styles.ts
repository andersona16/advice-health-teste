import styled, { css } from 'styled-components';

interface ITableButton {
  styleType: 'warning' | 'danger' | 'info' | 'success';
}

const buttonTypes = {
  success: css`
    color: #408401;
    background-color: #cbffc0;

    &:hover {
      color: #fff;
      background-color: #408401;
    }
  `,

  danger: css`
    color: #f64e60;
    background-color: #ffe2e5;

    &:hover {
      color: #fff;
      background-color: #f64e60;
    }
  `,

  info: css`
    color: #8950fc;
    background-color: #eee5ff;

    &:hover {
      color: #fff;
      background-color: #8950fc;
    }
  `,

  warning: css`
    color: #ffa800;
    background-color: #fff4de;

    &:hover {
      color: #fff;
      background-color: #ffa800;
    }
  `,

  disabled: css`
    color: #aaa;
    background: #ccc;

    cursor: not-allowed;

    &:hover {
      color: #aaa;
      background: #ccc;
    }
  `,
};

export const Container = styled.button<ITableButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  transition: background-color 0.2s, color 0.2s;

  ${props => buttonTypes[props.styleType]}

  ${props => props.disabled && buttonTypes.disabled}
`;
