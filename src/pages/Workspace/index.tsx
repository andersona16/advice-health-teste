import { Input } from '../../components/modules/elements/Form/Input';
import { Form } from '@unform/web';
import { useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import {
  Container,
  Dashboard,
  ContentsOfDivisionTwo,
  ReminderNotices,
  ContentsOfDivisionOne,
} from './styles';
import { Table } from '../../components/modules/elements/Table';
import { TableRow } from '../../components/modules/elements/Table/TableRow';
import { TableColumn } from '../../components/modules/elements/Table/TableColumn';
import { Calendar } from '../../components/modules/layout/Calendar';
import { StaticData } from '../../components/modules/layout/StaticData/RecentScheduling';
import { PatientsSeenPerDay } from '../../components/modules/layout/StaticData/PatientsSeenPerDay';
import { Recommendation } from '../../components/modules/layout/Recommendation';

function WorkSpace() {
  const handleSearch = useCallback(() => {
    // CODE
  }, []);

  return (
    <>
      <Container>
        <ContentsOfDivisionOne>
          <Form onSubmit={handleSearch}>
            <Input
              icon={FiSearch}
              name="search"
              placeholder="BUSCA"
              upperCase={false}
            />
          </Form>

          <Dashboard>
            <h1>Dashboard</h1>

            <div>
              <div>
                <StaticData />
              </div>

              <div>
                <PatientsSeenPerDay />
              </div>
            </div>
          </Dashboard>

          <ReminderNotices>
            <h1>Avisos/Lembrete</h1>

            <Table width="auto" height="auto">
              <TableRow>
                <TableColumn>
                  <span>Status</span>
                </TableColumn>
                <TableColumn>
                  <span>Nome paciente</span>
                </TableColumn>
                <TableColumn>
                  <span>Data da consulta</span>
                </TableColumn>
                <TableColumn>
                  <span>Nome do médico</span>
                </TableColumn>
                <TableColumn>
                  <span>Valor cobrado</span>
                </TableColumn>
                <TableColumn>
                  <span>Forma de pagamento</span>
                </TableColumn>
              </TableRow>

              <TableRow>
                <TableColumn>
                  <select name="" id="">
                    <option value=""></option>
                    <option value="">Compareceu</option>
                    <option value="">Ausente</option>
                    <option value="">Atrasado</option>
                  </select>
                </TableColumn>
                <TableColumn>
                  <span>John</span>
                </TableColumn>
                <TableColumn>
                  <span>08/07/2022</span>
                </TableColumn>
                <TableColumn>
                  <span>João Gomes</span>
                </TableColumn>
                <TableColumn>
                  <span>R$ 150</span>
                </TableColumn>
                <TableColumn>
                  <span>Débito</span>
                </TableColumn>
              </TableRow>
            </Table>
          </ReminderNotices>
        </ContentsOfDivisionOne>

        <ContentsOfDivisionTwo>
          <div>
            <Calendar />
          </div>

          <div>
            <Recommendation />
          </div>
        </ContentsOfDivisionTwo>
      </Container>
    </>
  );
}

export default WorkSpace;
