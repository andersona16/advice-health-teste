import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  width: 100%;
  height: 80px;

  /* position: fixed; */
  top: 0;
  z-index: 14;

  background: #dfdfdf;
  box-shadow: 0 0 15px rgb(0 0 0 / 50%);
    `;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1360px;
  width: 100%;
  height: 100%;

  margin: 0 auto;
  padding: 0 25px;
`;

export const MenuLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  max-width: 100%;

`;

export const MenuRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  max-width: 100%;


  > div:nth-last-child(2) > button {
    width: 43px;
    height: 43px;

    padding: 10px;

    border-radius: 0.85rem;
    border: none;

    > svg {
      width: 23px;
      height: 23px;
    }
  }

  > button {
    background-color: #c9f7f5;


    color: #1bc5bd;

    height: 33px;

    padding: 0 16px;

    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: ${shade(0.1, '#c9f7f5')};
      color: white;
    }
  }

  > button:nth-child(1) {
    margin-right: 0.5rem;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;

    transition: background-color 0.2s;

    border-radius: 0.85rem;

    &:hover {
      background-color: #f3f6f9;

      > svg {
        color: ${(shade(0.2), '#782273')};
      }
    }

    > svg {
      color: #ccc;

      transition: color 0.2s;
    }
  }
`;

export const CustomButton = styled.button`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  color: #ccc;

  transition: color 0.2s;

  &:hover {
    color: #48BDC7;

    > svg {
      color: #48BDC7;
    }
  }

  > svg {
    margin-right: 8px;

    color: #ccc;

    transition: color 0.2s;
  }
`;


