import { FC } from 'react';

import { Container } from './styles';

interface ITableButtonContainer {
  children?: React.ReactNode;

}

export const TableButtonContainer: FC<ITableButtonContainer> = ({ children }) => {
  return <Container>{children}</Container>;
};
