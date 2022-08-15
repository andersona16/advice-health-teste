import { FC, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from 'date-fns/locale';
import './custom.scss';

import DatePicker, { registerLocale } from 'react-datepicker';

const Calendar: FC = () => {
  registerLocale('ptBR', ptBR);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      <DatePicker
        locale={ptBR}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
    </>
  );
};

export { Calendar };
