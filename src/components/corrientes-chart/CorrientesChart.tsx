import { Corrientes } from "../../interfaces/interfaces"
import Chart from "react-apexcharts"

interface Props {
  corrientes : Corrientes[]
}

export const CorrientesChart = ( { corrientes } : Props) => {

  const corrientes_filtradas = corrientes.filter((data) => data.l1 != null)
  const timestamps = corrientes_filtradas.map((data) => data.timestamp);
  const l1 = corrientes_filtradas.map((data) => data.l1);
  const l2 = corrientes_filtradas.map((data) => data.l2);
  const l3 = corrientes_filtradas.map((data) => data.l3);

  const chartOptions = {
    // Opciones de ApexCharts aquí
    yaxis : {
      title : {
        text: "Corriente (A)" 
      }
    },
    xaxis: {
      categories: timestamps,
      type: 'datetime',
      labels : {
        datetimeUTC: false,
      },
      title : {
        text : "Tiempo"
      },
      datetimeFormatter: {
        year: 'yyyy',
        month: "MMM 'yy",
        day: 'dd MMM',
        hour: 'HH:mm',
      },          
      formatter: (value : string) => ( new Date(value))
      // labels: {
      //   formatter: function (value, timestamps, opts) {
      //     return opts.dateFormatter(new Date(timestamps));
      //   },
      
      // }
     },    
    tooltip : {
      x: {
        show: true,
        format: 'MMM dd HH:mm',
      },
      y: {
        formatter: (value : number) => `${value} A`
      }
    }
    

  };

  const series = [
    {
      name: 'L1',
      data: l1,
    },
    {
      name: 'L2',
      data: l2,
    },
    {
      name: 'L#3',
      data: l3,
    },
  ];
  return(
    <Chart
      /* @ts-ignore */
      options={chartOptions}
      series={series}
      type="line"p
      height={350}
    />
  )
}