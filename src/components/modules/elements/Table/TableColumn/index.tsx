import { FC } from 'react';

import { Container } from './styles';


interface ITableColumn {
  children?: React.ReactNode;

}

const TableColumn: FC<ITableColumn> = ({ children }) => {
  return <Container>{children}</Container>;
};

export { TableColumn };
