import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 30px 40px;
  gap: 60px;

  > div:nth-child(1) {
    display: flex;
    justify-content: space-around;

    width: 100%;

    input {
      width: 500px;
    }
  }
`;
