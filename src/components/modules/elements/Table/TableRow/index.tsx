import { FC } from 'react';

import { Container } from './styles';

interface ITableRow {
  children?: React.ReactNode;
}

const TableRow: FC<ITableRow> = ({ children }) => {
  return <Container>{children}</Container>;
};

export { TableRow };
