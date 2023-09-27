import { useState } from "react";
import { Corrientes } from "../interfaces/interfaces";
import { LicApi } from "../api/LicApi";
import { fechaUrlFormat } from "../utils/utils";


export const useCorrientes = () => {

	const [corrientes, setCorrientes] = useState<Corrientes[]>( [] );

  const getCorrientes = async ( id : String, start_date : Date, end_date : Date) => {
    setCorrientes([])
    try {
      const response = await LicApi.get<Corrientes[]>(`api/corrientes?id=${id}&from=${fechaUrlFormat(start_date)}&to=${fechaUrlFormat(end_date)}`);          
      setCorrientes( response.data );        
    } catch (error) {
        console.error('Error al obtener la medición:', error);        
    } 
  }

  return {    
    corrientes,    
    getCorrientes
  }
}