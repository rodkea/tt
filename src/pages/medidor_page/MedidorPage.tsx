import { useParams } from "react-router-dom";
import { useMediciones } from "../../hooks/useMediciones";
import './medidor-page.css'
import { PotenciasChart } from "../../components/potencias-chart/PotenciasChart";
import { CorrientesChart } from "../../components/corrientes-chart/CorrientesChart";
import { FactoresPotenciaChart } from "../../components/factores-potencia-chart/FactoresPotenciaChart";
import { useEffect, useState } from "react";
import { fechaUrlFormat, inputDateFormat, obtenerFechaAyer } from "../../utils/utils";
import { usePotencias } from "../../hooks/usePotencias";
import { useCorrientes } from "../../hooks/useCorrientes";
import { useFactoresPotencia } from "../../hooks/useFactoresPotencia";



export const MedidorPage = () => {


  const { id } = useParams()
  const [startDatePotencias, setStartDatePotencias] = useState(new Date())  
  const [endDatePotencias, setEndDatePotencias] = useState(new Date())
  const [startDateCorrientes, setStartDateCorrientes] = useState(new Date())  
  const [endDateCorrientes, setEndDateCorrientes] = useState(new Date())
  const [startDateFactoresPotencia, setStartDateFactoresPotencia] = useState(new Date())  
  const [endDateFactoresPotencia, setEndDateFactoresPotencia] = useState(new Date())
  const { potencias, getPotencias }  = usePotencias()
  const { corrientes, getCorrientes } = useCorrientes()
  const { factoresPotencia, getFactoresPotencia } = useFactoresPotencia()  
  
  useEffect(() => {
    id && getPotencias(id, startDatePotencias, endDatePotencias)
  }, [])

  useEffect(() => {
    id && getCorrientes(id, startDateCorrientes, endDateCorrientes)
  }, [])

  useEffect(() => {
    id && getFactoresPotencia(id, startDateFactoresPotencia, endDateFactoresPotencia)
  }, [])
  
  
  const graficarPotencias = () => {
    id && getPotencias(id, startDatePotencias, endDatePotencias)
  }

  const graficarCorrientes = () => {
    id && getCorrientes(id, startDateCorrientes, endDateCorrientes)
  }

  const graficarFactoresPotencia = () => {
    id && getFactoresPotencia(id, startDateFactoresPotencia, endDateFactoresPotencia)
  }

  return(
    <div className="medidor-page">          
      <h1>MEDIDOR ID: {id}</h1>  
      <h2>POTENCIAS</h2>          
      <div className="medidor-page__date-control">
        <h3>Seleccione fecha inicio:</h3>
        <input type="date" onChange={ (value ) => setStartDatePotencias(new Date(value.target.value))} value={ inputDateFormat(startDatePotencias)}/>        
        <h3>Seleccione fecha final:</h3>
        <input type="date" onChange={ (value ) => setEndDatePotencias(new Date(value.target.value))} value={ inputDateFormat(endDatePotencias)}/>        
        <a onClick={ graficarPotencias }><i className="fa-solid fa-chart-line" />Graficar</a>
        <a href={`http://31.220.108.16:8081/downloads/potencias?id=${id}&from=${fechaUrlFormat(startDatePotencias)}&to=${fechaUrlFormat(endDatePotencias)}`}><i className="fa-solid fa-file-csv"/>Descargar</a>
      </div>
      <PotenciasChart 
        potencias={ potencias }
      />
      <h2>CORRIENTES</h2>          
      <div className="medidor-page__date-control">
        <h3>Seleccione fecha inicio:</h3>
        <input type="date" onChange={ (value ) => setStartDateCorrientes(new Date(value.target.value))} value={ inputDateFormat(startDateCorrientes)}/>        
        <h3>Seleccione fecha final:</h3>
        <input type="date" onChange={ (value ) => setEndDateCorrientes(new Date(value.target.value))} value={ inputDateFormat(endDateCorrientes)}/>        
        <a onClick={ graficarCorrientes }><i className="fa-solid fa-chart-line" />Graficar</a>
        <a href={`http://31.220.108.16:8081/downloads/corrientes?id=${id}&from=${fechaUrlFormat(startDateCorrientes)}&to=${fechaUrlFormat(endDateCorrientes)}`}><i className="fa-solid fa-file-csv"/>Descargar</a>
      </div>      
      <CorrientesChart 
        corrientes= { corrientes }
      />
      <h2>FACTOR DE POTENCIA</h2>
      <div className="medidor-page__date-control">
        <h3>Seleccione fecha inicio:</h3>
        <input type="date" onChange={ (value ) => setStartDateFactoresPotencia(new Date(value.target.value))} value={ inputDateFormat(startDateFactoresPotencia)}/>        
        <h3>Seleccione fecha final:</h3>
        <input type="date" onChange={ (value ) => setEndDateFactoresPotencia(new Date(value.target.value))} value={ inputDateFormat(endDateFactoresPotencia)}/>        
        <a onClick={ graficarFactoresPotencia }><i className="fa-solid fa-chart-line" />Graficar</a>
        <a href={`http://31.220.108.16:8081/downloads/factores-potencia?id=${id}&from=${fechaUrlFormat(startDateFactoresPotencia)}&to=${fechaUrlFormat(endDateFactoresPotencia)}`}><i className="fa-solid fa-file-csv"/>Descargar</a>
      </div>
      <FactoresPotenciaChart 
        factores_potencia={ factoresPotencia }
      />
    </div>
  )
}