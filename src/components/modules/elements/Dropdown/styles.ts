import styled, { css } from 'styled-components';

interface IDropdownStyles {
  togglerBackground: string;
  textColor: string;
  colorOnHover?: string;
  backgroundOnHover?: string;
}

interface IDropdownProps {
  isDropped: boolean;
}

interface ITogglerProps {
  icon: boolean;
  customStyles: IDropdownStyles;
  isDropped: boolean;
  isDisabled?: boolean;
}

export const Container = styled.div<IDropdownProps>`
  position: relative;

  transition: background-color 0.2s;

  border-radius: 0.75rem;

  z-index: 13;

  ${props =>
    props.isDropped &&
    css`
      z-index: 15;
    `}
`;

export const Toggler = styled.button<ITogglerProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 33px;
  width: auto;

  background-color: ${props => props.customStyles.togglerBackground};

  color: ${props => props.customStyles.textColor};

  transition: background-color 0.2s;

  > svg {
    color: ${props => props.customStyles.textColor};

    transition: color 0.2s;
  }

  ${props =>
    props.icon
      ? css`
          padding: 0 7px;
        `
      : css`
          padding-left: 10px;
          padding-right: 7px;
        `}

  ${props =>
    props.customStyles.backgroundOnHover &&
    css`
      &:hover {
        background-color: ${props.customStyles.backgroundOnHover};
      }
    `}

    ${props =>
    props.customStyles.colorOnHover &&
    css`
      &:hover {
        color: ${props.customStyles.colorOnHover};

        > svg {
          color: ${props.customStyles.colorOnHover};
        }
      }
    `}

  ${props =>
    props.isDropped &&
    props.customStyles.backgroundOnHover &&
    css`
      background-color: ${props.customStyles.backgroundOnHover};
    `}

  ${props =>
    props.isDropped &&
    props.customStyles.colorOnHover &&
    css`
      svg {
        color: ${props.customStyles.colorOnHover};
      }
    `}

  ${props =>
    props.isDisabled &&
    css`
      background-color: #ccc;

      cursor: not-allowed;

      svg {
        color: white;
      }
    `}
`;

export const Content = styled.div<IDropdownProps>`
  width: 250px;

  background-color: white;

  border: none;
  border-radius: 0.7rem;

  box-shadow: 0 0 50px 0 rgb(82 63 105 / 15%);

  position: absolute;
  top: 100%;

  height: 100px;

  @media screen and (max-width: 1730px) {
    right: 0;
  }

  margin-top: 10px;

  padding: 10px 0;

  opacity: 0;
  visibility: hidden;

  transition: opacity 0.2s, visibility 0.2s;

  ${props =>
    props.isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      z-index: 14;
    `}

  ul, li {
    display: flex;
    flex-direction: column;
    gap: 20px;

    list-style: none;

    font-size: 1rem;
    font-weight: 600;

    color: #abacb8;

    height: 39px;

    padding: 0 10px;

    transition: background-color 0.2s;

    a,
    button {
      display: flex;
      align-items: center;

      height: 100%;
      width: 100%;

      border: 1px solid gray;

      font-size: inherit;
      font-weight: 700;
      color: inherit;
      text-decoration: inherit;

      transition: color 0.2s;

      svg {
        margin-right: 10px;

        transition: color 2ms;

        height: 20px;
        width: 20px;
      }
    }
      a {
        font-size: inherit;
        color: inherit;
        text-decoration: inherit;
      }
  }
`;

export const Background = styled.div<IDropdownProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;

  background-color: transparent;

  width: 100vw;
  height: 100vh;

  visibility: hidden;
  opacity: 0;

  ${props =>
    props.isDropped &&
    css`
      visibility: visible;
      opacity: 1;
      z-index: 14;
    `}
`;
