import { FactorPotencia } from "../../interfaces/interfaces"
import Chart from "react-apexcharts"

interface Props {
  factores_potencia : FactorPotencia[]
}

export const FactoresPotenciaChart = ( { factores_potencia } : Props) => {

  const factores_potencia_filtrados = factores_potencia.filter((data) => data.factor_potencia != null)
  const timestamps = factores_potencia_filtrados.map((data) => data.timestamp);
  const factor_potencia = factores_potencia_filtrados.map((data) => data.factor_potencia);
  
  

  const chartOptions = {
    // Opciones de ApexCharts aquí
    yaxis : {
      title : {
        text: "Factor de Potencia" 
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
      }
    }
    

  };

  const series = [
    {
      name: 'Factor de Potencia',
      data: factor_potencia,
    },
  ];
  return(
    <Chart
      /* @ts-ignore */
      options={chartOptions}
      series={series}
      type="line"
      height={350}
    />
  )
}