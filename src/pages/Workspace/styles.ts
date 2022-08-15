import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;

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
  > h1 {
    color: gray;
    font-size: 2rem;
    padding: 0 20px;
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }
`;

export const ReminderNotices = styled.div`
  h1 {
    color: gray;
    font-size: 2rem;
    padding: 0 20px;
  }

  span {
    font-size: 0.8rem;
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
