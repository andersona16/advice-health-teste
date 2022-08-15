import { FC } from 'react';

import { Container } from './styles';
import { TableColumn } from './TableColumn';
import { TableRow } from './TableRow';

interface ITable {
  width?: string | number;
  height?: string | number;
  children?: React.ReactNode;
}

const Table: FC<ITable> = ({ height, width, children }) => {
  return (
    <Container style={{ height, width }}>
      <TableRow>
        <TableColumn>
          <span>{children}</span>
        </TableColumn>
      </TableRow>
    </Container>
  );
};

export { Table };
