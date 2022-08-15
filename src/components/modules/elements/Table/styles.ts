import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  box-shadow: 0 0 30px 0 rgb(82 63 105 / 10%);

  margin: 10px;

  display: flex;
  flex-direction: column;

  border-radius: 5px;

  background-color: #f4f7fc;

  > div:nth-child(1) {
    > div {
      font-weight: 700;

      text-transform: uppercase;

      color: #606f89;
    }
  }
`;
