import { Form } from "@unform/web";
import { useCallback } from "react";
import { FiSearch, FiFilter, FiEdit } from "react-icons/fi";
import { Input } from "../../components/modules/elements/Form/Input";
import { Table } from "../../components/modules/elements/Table";
import { TableColumn } from "../../components/modules/elements/Table/TableColumn";
import { TableRow } from "../../components/modules/elements/Table/TableRow";
import { ButtonOptions, Container, OptionsButtons } from "./styles";

function ConsultAppointments() {

  const handleSearch = useCallback(() => {
    // CODE
  }, []);


  return (
    <>
      <Container>
        <div>
          <Form onSubmit={handleSearch}>
            <Input
              icon={FiSearch}
              name="search"
              placeholder="BUSCA RÁPIDA"
              upperCase={false}
            />
          </Form>


          <div>
            <button>
              <FiFilter size={30} />
              <h1> Filtros avançados</h1>
            </button>
          </div>

        </div>


        <div>

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
              <TableColumn>
                <span>Opções</span>
              </TableColumn>

            </TableRow>

            <TableRow>
              <TableColumn>
                <input type="checkbox" name="" id="" />
              </TableColumn>
              <TableColumn>
                <span>Teste</span>
              </TableColumn>
              <TableColumn>
                <span>Teste</span>
              </TableColumn>
              <TableColumn>
                <span>Teste</span>
              </TableColumn>
              <TableColumn>
                <span>Teste</span>
              </TableColumn>
              <TableColumn>
                <span>Teste</span>
              </TableColumn>

              <TableColumn>
                <OptionsButtons>
                  <ButtonOptions styleType="info" icon={FiEdit} />
                  <ButtonOptions styleType="info" icon={FiSearch} />
                </OptionsButtons>
              </TableColumn>
            </TableRow>

          </Table>
        </div>


      </Container>
    </>

  );
}

export default ConsultAppointments;
