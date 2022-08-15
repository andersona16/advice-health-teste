import { FC } from 'react';
import { Container, Content } from './styles';
import {
  FiEdit,
  FiTrash2,
  FiPlus,
  FiPlusCircle,
  FiMinusCircle,
} from 'react-icons/fi';
import { AddCustomer } from '../AddCustomer';

const OpeningHours: FC = () => {
  return (
    <>
      <Container>
        <Content>
          <div>
            <div>
              <span>08:00</span>
            </div>

            <AddCustomer />

            <div>
              <button>
                <span>
                  <FiPlus />
                </span>
              </button>
              <button>
                <span>
                  <FiTrash2 />
                </span>
              </button>
              <button>
                <span>
                  <FiEdit />
                </span>
              </button>
            </div>
          </div>
        </Content>
      </Container>
    </>
  );
};

export { OpeningHours };
