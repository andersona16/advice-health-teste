import styled from 'styled-components';
import { TableButton } from '../../components/modules/elements/Table/TableButtonContainer/TableButton';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 30px 40px;
  gap: 60px;

  > div:nth-child(1) {
    display: flex;
    justify-content: space-around;
    max-width: 100%;

    input {
      width: 500px;
    }

    > div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      > button {
        border: none;
        background-color: transparent;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }

      h1 {
        font-size: 1rem;
      }
    }

    > div:nth-child(4) {
      background-color: red;
    }
  }

  > div:nth-child(2) {
    span {
      font-size: 10px;
    }
  }
`;

export const ButtonOptions = styled(TableButton)`
  border: none;
`;

export const OptionsButtons = styled.div`
  display: flex;

  align-items: center;
  gap: 20px;
`;
