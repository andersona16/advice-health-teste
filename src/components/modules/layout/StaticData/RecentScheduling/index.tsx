import { FC, useCallback, useMemo } from 'react';
import Chart, { Props } from 'react-apexcharts';

import { CardContainer, CardHeader, CardContent } from './styles';

const StaticData: FC = () => {
  const chartOptions = useMemo<Props>(() => {
    return {
      series: [
        {
          name: 'Agendamentos Cancelados',
          data: [30, 45, 57, 55, 60, 58],
        },
        {
          name: 'Agendamentos Concluidos',
          data: [76, 85, 101, 98, 87, 105],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ['30%'],
          endingShape: 'rounded',
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Jun'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: '#6b7280',
            fontSize: '0.95rem',
            fontFamily: 'Nunito',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#6b7280',
            fontSize: '0.95rem',
            fontFamily: 'Nunito',
          },
        },
      },
      fill: {
        opacity: 1,
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0,
          },
        },
        hover: {
          filter: {
            type: 'none',
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: '0.95rem',
          fontFamily: 'Nunito',
        },
      },
      colors: ['#b5b5c3', '#007bff'],
      grid: {
        borderColor: '#ccc',
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      responsive: [
        {
          breakpoint: 1365,
          options: {
            width: '707px',
          },
        },
      ],
    };
  }, []);

  const handlebutton = useCallback((id: string, idParent: string) => {
    const buttonElement = document.getElementById(id);

    if (!buttonElement) {
      return;
    }

    const allbuttons = document.querySelectorAll(`#${idParent} button`);

    if (buttonElement.style.backgroundColor === '#007bff') {
      buttonElement.style.backgroundColor = 'transparent';
      buttonElement.style.color = '#7e8299';
    } else {
      Array.from(allbuttons).forEach(element => {
        const parsedElement = element as HTMLElement;

        parsedElement.style.backgroundColor = 'transparent';
        parsedElement.style.color = '#7e8299';
      });

      buttonElement.style.backgroundColor = '#007bff';
      buttonElement.style.color = '#fff';
    }
  }, []);

  return (
    <>
      <CardContainer>
        <CardHeader>
          <div>
            <h1>Agendamentos recentes</h1>
            <span>Mais de 100+ agendamentos mensais</span>
          </div>

          <div id="graph-buttons">
            <button
              id="month-button"
              onClick={() => handlebutton('month-button', 'graph-buttons')}
              type="button"
            >
              Mês
            </button>
            <button
              id="graph-week"
              type="button"
              onClick={() => handlebutton('graph-week', 'graph-buttons')}
            >
              Semana
            </button>
            <button
              id="graph-day"
              type="button"
              onClick={() => handlebutton('graph-day', 'graph-buttons')}
            >
              Dia
            </button>
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

export { StaticData };
