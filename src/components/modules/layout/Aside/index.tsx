import { Link } from 'react-router-dom';
import './custom.scss';
import {
  FiChevronsRight,
  FiSearch,
  FiHome,
  FiAlignJustify,
} from 'react-icons/fi';
import { FC, useCallback, useState } from 'react';

interface IAside {
  isDisabled?: boolean;
}

const Aside: FC<IAside> = ({ isDisabled }) => {
  const [isDropped, setIsDropped] = useState(false);

  const handleDrop = useCallback(() => {
    setIsDropped(!isDropped);
  }, [isDropped]);

  console.log(handleDrop)

  return (
    <aside
      className="aside-container"
      onClick={isDisabled ? undefined : handleDrop}
    >
      <FiChevronsRight size={30} />

      <div>
        <div>
          <Link to="/workspace">
            <FiHome size={25} />
            <span>Dashboard</span>
          </Link>

          <Link to="/consult-appointments">
            <FiSearch size={25} />
            <span>Consultar agendamentos</span>
          </Link>
          <Link to="/appointment-times">
            <FiAlignJustify size={25} />
            <span>Horarios de agendamentos</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export { Aside };
