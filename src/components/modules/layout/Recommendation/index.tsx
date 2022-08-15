import { FC } from 'react';
import { ListOfDoctors } from '../ListOfDoctors';
import { Container } from './styles';

const Recommendation: FC = () => {
  return (
    <>
      <Container>
        <ListOfDoctors />
      </Container>
    </>
  );
};

export { Recommendation };
