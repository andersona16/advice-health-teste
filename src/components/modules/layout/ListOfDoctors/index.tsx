import { FC } from 'react';
import { Content, Container, CardUser, InfoCard } from './styles';

const ListOfDoctors: FC = () => {
  const doctors = [
    {
      id: '1',
      name: 'John',
      role: 'Médico',
      src: 'https://i.pravatar.cc/60',
    },
    {
      id: '2',
      name: 'John',
      role: 'Médico',
      src: 'https://i.pravatar.cc/60',
    },
    {
      id: '3',
      name: 'John',
      role: 'Médico',
      src: 'https://i.pravatar.cc/60',
    },
    {
      id: '4',
      name: 'John',
      role: 'Médico',
      src: 'https://i.pravatar.cc/60',
    },
    {
      id: '5',
      name: 'John',
      role: 'Médico',
      src: 'https://i.pravatar.cc/60',
    },
  ];

  console.log(doctors);
  return (
    <>
      <Container>
        <Content>
          <CardUser>
            {doctors.map(doctor => (
              <InfoCard key={doctor.id}>
                <img src={doctor.src} />
                <div>
                  <h1>{doctor.name}</h1>
                  <span>{doctor.role}</span>
                </div>
              </InfoCard>
            ))}
          </CardUser>
        </Content>
      </Container>
    </>
  );
};

export { ListOfDoctors };
