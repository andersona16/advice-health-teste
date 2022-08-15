import { FC, useCallback, useMemo } from 'react';
import Chart, { Props } from 'react-apexcharts';

import { CardContainer, CardHeader, CardContent } from './styles';

const PatientsSeenPerDay: FC = () => {
  const chartOptions = useMemo<Props>(() => {
    return {
      series: [
        {
          name: 'Atendimento por mês',
          type: 'column',
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        },
        {
          name: 'Atendimento por dia',
          type: 'line',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
      },
      stroke: {
        width: [0, 4],
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: [
        '01 Jan 2022',
        '02 Jan 2022',
        '03 Jan 2022',
        '04 Jan 2022',
        '05 Jan 2022',
        '06 Jan 2022',
        '07 Jan 2022',
        '08 Jan 2022',
        '09 Jan 2022',
        '10 Jan 2022',
        '11 Jan 2022',
        '12 Jan 2022',
      ],
      xaxis: {
        type: 'datetime',
      },
    };
  }, []);

  return (
    <>
      <CardContainer>
        <CardHeader>
          <div>
            <h1>Pacientes atendidos</h1>
            <span>Mais de 100+ de pacientes agendados mensalmente</span>
          </div>
        </CardHeader>

        <CardContent style={{ display: 'block' }}>
          <Chart
            options={chartOptions}
            series={chartOptions.series}
            type="bar"
            height="380px"
            width="100%"
          />
        </CardContent>
      </CardContainer>
    </>
  );
};

export { PatientsSeenPerDay };
