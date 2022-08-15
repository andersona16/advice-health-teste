import { format } from 'date-fns';
import { Calendar } from '../../components/modules/layout/Calendar';
import { ListOfDoctors } from '../../components/modules/layout/ListOfDoctors';
import { OpeningHours } from '../../components/modules/layout/OpeningHours';
import Moment from 'moment';

import {
  AppointmentInformation,
  CardUsers,
  Container,
  Content,
  ContentOfAddInfo,
} from './styles';
import { v4 } from 'uuid';
import { useCallback, useState } from 'react';
import { FiEdit, FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { Button } from '../../components/modules/elements/Button';
import { AddCustomer } from '../../components/modules/layout/AddCustomer';

export interface IMessage {
  id: string;
}

function AppointmentTimes() {
  const formatDate = Moment().format('DD-MM-YYYY');

  var minutesToAdd = 30;
  var currentDate = new Date();
  var futureDate = new Date(currentDate.getTime() + minutesToAdd * 60000);

  const [messages, setMessages] = useState<IMessage[]>([]);

  const handleAddMessages = useCallback(() => {
    setMessages(oldState => {
      if (oldState.length === 100) {
        return oldState;
      }

      const message = {
        id: v4(),
      };

      return [...oldState, message];
    });
  }, []);

  const handleRemoveMessages = useCallback((messageId: string) => {
    setMessages(oldState => {
      const updatedState = oldState.filter(state => state.id !== messageId);

      return updatedState;
    });
  }, []);

  return (
    <>
      <Container>
        <div>
          <h2>Médicos</h2>
          <ListOfDoctors />

          <div>
            <Calendar />
          </div>
        </div>

        <Content>
          <ContentOfAddInfo>
            <h3>{formatDate}</h3>

            <Button
              styleType="info"
              icon={FiPlusCircle}
              onClick={handleAddMessages}
              disabled={messages.length === 100}
            >
              Adicionar agendamento
            </Button>
          </ContentOfAddInfo>

          <AppointmentInformation>
            <OpeningHours />

            <div>
              {messages.length > 0 &&
                messages.map(message => (
                  <div
                    key={message.id}
                    style={{
                      display: 'flex',
                      flex: 1,
                      marginTop: 20,
                    }}
                  >
                    <CardUsers>
                      <label>08:30</label>
                      <AddCustomer />

                      <button>
                        <span>
                          <FiPlusCircle />
                        </span>
                      </button>
                    </CardUsers>
                    <Button
                      styleType="danger"
                      icon={FiMinusCircle}
                      onClick={() => handleRemoveMessages(message.id)}
                      style={{
                        padding: 11,
                        marginLeft: 6,
                        alignSelf: 'center',
                      }}
                    />
                  </div>
                ))}
            </div>
          </AppointmentInformation>
        </Content>
      </Container>
    </>
  );
}

export default AppointmentTimes;
