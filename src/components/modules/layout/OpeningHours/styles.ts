import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  box-shadow: 0 0 4px rgb(0 0 0 / 50%);
  padding: 10px;

  overflow: overlay;

  > div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    gap: 20px;

    > div:nth-child(1) {
      span {
        font-size: 2rem;
        color: gray;
      }
    }
    div:nth-child(3) {
      background-color: red;
    }
  }
`;
