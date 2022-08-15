import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-child(even) {
    background-color: #fff;
  }

  &:nth-child(odd) {
    background-color: #f4f7fc;
  }
`;
