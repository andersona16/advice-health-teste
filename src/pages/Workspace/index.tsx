import { Input } from "../../components/modules/elements/Form/Input";
import { Form } from '@unform/web';
import { useCallback } from "react";
import { FiSearch } from "react-icons/fi";
import { Container, Dashboard, ContentsOfDivisionTwo, ReminderNotices, ContentsOfDivisionOne } from "./styles";
import { TableContainer } from "../../components/modules/elements/Table";

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
                Número de agendamentos do dia
              </div>

              <div>
                <div>Número de pacientes atendidios no dia</div>
                <div>Faturamento do dia</div>
              </div>
            </div>
          </Dashboard>


          <ReminderNotices>
            <h1>Avisos/Lembrete</h1>
            <span>avisos/lembretes;</span>

            <TableContainer />
          </ReminderNotices>
        </ContentsOfDivisionOne>


        <ContentsOfDivisionTwo>
          <div>
            <h1>Data</h1>
          </div>

          <div>
            <h1>Indicações</h1>
            <span>Agenda do dia</span>
          </div>
        </ContentsOfDivisionTwo>
      </Container>
    </>
  );
}

export default WorkSpace;
