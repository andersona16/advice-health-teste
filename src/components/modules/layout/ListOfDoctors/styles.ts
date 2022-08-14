import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #f2f2f2;
  height: auto;
  width: auto;
  height: 223px;
  overflow: overlay;
`;

export const CardUser = styled.div`
  background-color: 1px solid #fff;
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

  background-color: #d9d9d9;

  img {
    border-radius: 10px;
    width: 36px;
    height: 36px;
  }
`;
