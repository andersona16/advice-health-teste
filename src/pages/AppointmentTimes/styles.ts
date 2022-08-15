import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  padding: 30px 40px;
  gap: 60px;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 30px;

    h2 {
      font-size: 1.8rem;
      color: gray;
      font-weight: 600;
    }
  }
`;

export const Content = styled.div``;

export const ContentOfAddInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
`;

export const AppointmentInformation = styled.div``;

export const CardUsers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 100%;

  display: flex;

  align-items: center;

  justify-content: center;

  background: #f2f2f2;
  box-shadow: 0 0 4px rgb(0 0 0 / 50%);
  padding: 10px;
  overflow: overlay;

  > label {
    font-size: 2rem;
    color: gray;
  }

  > button {
    border: none;
    background-color: transparent;
  }
`;
