import { FC } from 'react';
import { CardUser, Container, Content } from './styles';

const AddCustomer: FC = () => {
  const doctors = [
    {
      id: '1',
      name: 'John',
      role: 'Médico',
      src: 'https://i.pravatar.cc/60',
    },
  ];

  return (
    <>
      <Container>
        <Content>
          <CardUser>
            {doctors.map(doctor => (
              <div key="id">
                <img src={doctor.src} />
                <div>
                  <h1>{doctor.name}</h1>
                  <span>{doctor.role}</span>
                </div>
              </div>
            ))}
          </CardUser>
        </Content>
      </Container>
    </>
  );
};
export { AddCustomer };
