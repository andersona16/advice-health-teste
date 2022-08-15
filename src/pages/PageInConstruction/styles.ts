import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  background-color: #f8f8f8;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 0 10px;

  > h1 {
    font-size: 5rem;
    color: #181c32;

    @media (max-width: 950px) {
      font-size: 3rem;
    }

    @media (max-width: 550px) {
      font-size: 2.15rem;
    }

    @media (max-width: 390px) {
      font-size: 1.75rem;
    }
  }

  > p {
    font-size: 1.5rem;

    max-width: 650px;

    margin-bottom: 16px;

    text-align: center;

    @media (max-width: 550px) {
      font-size: 1.275rem;
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 400;

    font-size: 1.25rem;
    text-decoration: none;

    transition: color 0.2s;

    color: #592776;

    &:hover {
      color: #762772;

      svg {
        color: #762772;
      }
    }

    svg {
      transition: color 0.2s;

      margin-right: 16px;
    }
  }

  @media (max-width: 550px) {
    > h1,
    > p {
      text-align: center;
    }
  }
`;
