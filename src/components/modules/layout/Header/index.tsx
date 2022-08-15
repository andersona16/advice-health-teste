/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import { FiUser, FiLogOut, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Menu, MenuLeft, MenuRight, CustomButton } from './styles';
import { Dropdown } from '../../elements/Dropdown';
import imgLogo from '../../../../assets/img/logo_advice_150.png';

const Header: FC = () => {
  return (
    <Container>
      <Menu>
        <MenuLeft>
          <Link to="/workspace">
            <img src={imgLogo} alt="AdviceHealth | Logo" />
          </Link>
        </MenuLeft>

        <MenuRight>
          <Dropdown
            styles={{
              togglerBackground: '#fff',
              textColor: '#ccc',
              backgroundOnHover: '#f3f6f9',
              colorOnHover: '#48BDC7',
            }}
            icon={FiUser}
          >
            <li>
              <Link to="page-in-development">
                <CustomButton type="button">
                  <FiSettings size={20} />
                  Ver perfil
                </CustomButton>
              </Link>
            </li>
            <li>
              <Link to="/page-in-development">
                <CustomButton type="button">
                  <FiLogOut size={20} />
                  Sair
                </CustomButton>
              </Link>
            </li>
          </Dropdown>
        </MenuRight>
      </Menu>
    </Container>
  );
};

export { Header };
