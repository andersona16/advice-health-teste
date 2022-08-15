import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    font-size: 14px;
    color: gray;
  }
  span {
    font-size: 14px;
    color: gray;
  }
`;

export const CardUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div:nth-child(1) {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 15px;

  background-color: #d9d9d9;

  img {
    border-radius: 50%;
    max-width: 100%;
    height: auto;
  }

  & + * {
    margin-top: 10px;
  }
`;
