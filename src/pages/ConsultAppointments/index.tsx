import { Form } from "@unform/web";
import { useCallback } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import { Input } from "../../components/modules/elements/Form/Input";
import { Container } from "./styles";

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

          <h1>
            <FiFilter size={30} />
            Filtros avançados</h1>


        </div>


      </Container>
    </>

  );
}

export default ConsultAppointments;
