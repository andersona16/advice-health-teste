import { Link } from 'react-router-dom';
import './custom.scss';
import { FiChevronsRight, FiSearch, FiHome, FiAlignJustify } from 'react-icons/fi';
import { FC, useState } from 'react';

const Aside: FC = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <aside className="aside-container">

      <FiChevronsRight size={30} />

      <div>
        <div>
          <Link to="/workspace">
            <FiHome size={25} />

            Dashboard
          </Link>

          <Link to="/consult-appointments">
            <FiSearch size={25} />

            Consultar agendamentos

          </Link>
          <Link to="/appointment-times">
            <FiAlignJustify size={25} />

            Horarios de agendamentos

          </Link>
        </div>
      </div>
    </aside >
  );
}

export { Aside };
