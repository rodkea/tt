import { useState } from "react";
import { FactorPotencia } from "../interfaces/interfaces";
import { LicApi } from "../api/LicApi";
import { fechaUrlFormat } from "../utils/utils";


export const useFactoresPotencia = () => {

	const [factoresPotencia, setFactoresPotencia] = useState<FactorPotencia[]>( [] );

  const getFactoresPotencia = async ( id : String, start_date : Date, end_date : Date) => {
    setFactoresPotencia([])
    try {
      const response = await LicApi.get<FactorPotencia[]>(`api/factores-potencia?id=${id}&from=${fechaUrlFormat(start_date)}&to=${fechaUrlFormat(end_date)}`);          
      setFactoresPotencia( response.data );        
    } catch (error) {
        console.error('Error al obtener la medición:', error);        
    } 
  }

  return {    
    factoresPotencia,    
    getFactoresPotencia
  }
}