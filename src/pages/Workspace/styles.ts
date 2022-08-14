import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  padding: 30px 40px;
  gap: 60px;
  form {
    input {
      width: 350px;
      border-radius: 0px;
    }
  }
`;

export const Dashboard = styled.div`
  h1 {
    color: gray;
    font-size: 2rem;
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    gap: 15px;

    > div:nth-child(1) {
      background: red;
      width: 300px;
    }
    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 10px;
      > div:nth-child(1) {
        background: red;
        width: 300px;
        height: 120px;
      }
      > div:nth-child(2) {
        background: red;
        width: 300px;
        height: 120px;
      }
    }
  }
`;

export const ReminderNotices = styled.div`
  h1 {
    color: gray;
    font-size: 2rem;
  }
`;

export const ContentsOfDivisionOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const ContentsOfDivisionTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
