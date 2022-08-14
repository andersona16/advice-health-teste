import { ListOfDoctors } from "../../components/modules/layout/ListOfDoctors";
import { OpeningHours } from "../../components/modules/layout/OpeningHours";
import { Container } from "./styles";

function AppointmentTimes() {
  return (
    <>
      <Container>
        <div>
          <ListOfDoctors />

          <div>
            <h1>Data</h1>
          </div>
        </div>

        <div>
          <OpeningHours />
        </div>
      </Container>
    </>

  );
}

export default AppointmentTimes;


