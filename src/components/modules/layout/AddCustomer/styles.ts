import styled from 'styled-components';

export const CardUser = styled.div`
  width: 313px;
  height: 50px;
  border-radius: 10px;

  & + * {
    margin-top: 10px;
  }
  h1 {
    font-size: 14px;
    color: gray;
  }
  span {
    font-size: 14px;
    color: gray;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 0px 12px 0px 6px;


  img {
    border-radius: 10px;
    width: 36px;
    height: 36px;
  }
`;
