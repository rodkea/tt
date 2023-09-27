import { useState } from "react";
import { Potencias } from "../interfaces/interfaces";
import { LicApi } from "../api/LicApi";
import { fechaUrlFormat } from "../utils/utils";


export const usePotencias = () => {

	const [potencias, setPotencias] = useState<Potencias[]>( [] );

  const getPotencias = async ( id : String, start_date : Date, end_date : Date) => {
    setPotencias([])
    try {
      const response = await LicApi.get<Potencias[]>(`api/potencias?id=${id}&from=${fechaUrlFormat(start_date)}&to=${fechaUrlFormat(end_date)}`);          
      setPotencias( response.data );        
    } catch (error) {
        console.error('Error al obtener la medición:', error);        
    } 
  }

  return {    
    potencias,    
    getPotencias
  }
}