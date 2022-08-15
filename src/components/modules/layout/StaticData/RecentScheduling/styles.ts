import { shade } from 'polished';
import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 851px;
  width: 100%;

  background-color: #f3f6f9;

  border-radius: 10px;

  padding-bottom: 20px;

  @media screen and (max-width: 1365px) {
    max-width: 717px;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 1140px) {
    max-width: 100%;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px 30px;

  > div:nth-child(1) {
    > h1 {
      font-size: 1.25rem;
      color: #181c32;
    }

    > span {
      font-size: 0.95rem;
      color: #7e8299;
    }
  }

  > div:nth-child(2) {
    > button {
      padding: 0 10px;
      margin: 0 2px;

      font-size: 0.95rem;
      color: #7e8299;

      height: 33px;
      border: none;

      transition: background-color 0.2s, color 0.2s;
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 30px;
`;
