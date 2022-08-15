import styled, { css } from 'styled-components';

interface IButtonCustomProps {
  styleType: 'success' | 'info' | 'danger' | 'warning';
  loading?: number;
}

const buttonStyles = {
  success: css`
    color: #2e656a;
    background-color: #e6fffa;
    border: 2px solid #2e656a;

    &:hover {
      color: #fff;
      background-color: #2e656a;
    }
  `,

  danger: css`
    color: #f64e60;
    background-color: #ffe2e5;
    border: 2px solid #f64e60;

    &:hover {
      color: #fff;
      background-color: #f64e60;
    }
  `,

  info: css`
    color: #8950fc;
    background-color: #eee5ff;
    border: 2px solid #8950fc;

    &:hover {
      color: #fff;
      background-color: #8950fc;
    }
  `,

  warning: css`
    color: #ffa800;
    background-color: #fff4de;
    border: 2px solid #ffa800;

    &:hover {
      color: #fff;
      background-color: #ffa800;
    }
  `,
};

export const ButtonCustom = styled.button<IButtonCustomProps>`
  display: flex;
  align-items: center;

  ${props => buttonStyles[props.styleType]}

  height: 42px;

  padding: 11px 32px;

  font-size: 1.15rem;

  border-radius: 0.7rem;

  transition: background-color 0.2s, color 0.2s, border-color 0.2s;

  ${props =>
    props.disabled &&
    css`
      background-color: #ccc;
      border-color: #ccc;

      color: #aaa;

      &:hover {
        background-color: #ccc;

        color: #aaa;

        border-color: #ccc;
      }

      cursor: not-allowed;
    `}

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
