import { Potencias } from "../../interfaces/interfaces"
import Chart from "react-apexcharts"

interface Props {
  potencias : Potencias[]
}

export const PotenciasChart = ( {potencias } : Props) => {
  
  const potencias_filtradas = potencias.filter((data) => data.potencia_activa != null)
  const timestamps = potencias_filtradas.map((data) => data.timestamp);
  const potencia_activa = potencias_filtradas.map((data) => data.potencia_activa);
  const potencia_reactiva = potencias_filtradas.map((data) => data.potencia_reactiva);
  const potencia_aparente = potencias_filtradas.map((data) => data.potencia_aparente);  
  const chartOptions = {
    // Opciones de ApexCharts aquí
    yaxis : {
      title : {
        text: "Potencia (kW, kVAR, kVA)" 
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
        /* @ts-ignore */
        formatter: (value : number, { seriesIndex, w}) => {

          switch (w.globals.seriesNames[seriesIndex]) {
            case 'Potencia Activa':
              return `${value} kW`
            case 'Potencia Reactiva':
              return `${value} kVAR`
              
            case 'Potencia Aparente':
              return `${value} kVA`
          }          
        }
      }
    }
    

  };

  const series = [
    {
      name: 'Potencia Activa',
      data: potencia_activa,
    },
    {
      name: 'Potencia Reactiva',
      data: potencia_reactiva,
    },
    {
      name: 'Potencia Aparente',
      data: potencia_aparente,
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