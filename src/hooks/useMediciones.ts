import { useEffect, useState } from "react";



import { Corrientes, FactorPotencia, Potencias } from "../interfaces/interfaces";
import { LicApi } from "../api/LicApi";
import { fechaUrlFormat, obtenerFechaAyer } from "../utils/utils";


export const useMediciones = ( id: string ) => {

	
	const [isLoading, setIsLoading] = useState(false);

    const [] = useState()

	const [potenciasMedidor, setPotenciasMedidor] = useState<Potencias[]>( [] );

	const [corrientesMedidor, setCorrientesMedidor] = useState<Corrientes[]>( [] );

    const [factoresPotenciaMedidor, setFactoresPotenciaMedidor] = useState<FactorPotencia[]>( [] );

	const fecha = obtenerFechaAyer();

    const getMediciones = async ( id : String, start_date : Date, end_date : Date) => {
        setPotenciasMedidor([])
        try {
            const medidorPotenciaPromise = LicApi.get<Potencias[]>(`api/potencias?id=${id}&from=${fechaUrlFormat(start_date)}&to=${fechaUrlFormat(end_date)}`);
            const medidorCorrientePromise = LicApi.get<Corrientes[]>(`api/corrientes?id=${id}&from=01-08-2023&to=04-09-2023`);
            const medidorFactorPotenciaPromise = LicApi.get<FactorPotencia[]>(`api/factores-potencia?id=${id}&from=01-08-2023&to=04-09-2023`);

            const response = await Promise.all([
                medidorPotenciaPromise,
                medidorCorrientePromise,
                medidorFactorPotenciaPromise,
            ])
     
			setPotenciasMedidor( response[0].data );
            setCorrientesMedidor( response[1].data );
            setFactoresPotenciaMedidor( response[2].data );
			setIsLoading(false);

        } catch (error) {
            console.error('Error al obtener la medición:', error);
            setIsLoading(false);
        } 
    }


	
	// useEffect(() => {
    //     getMediciones();
	// },[id])
	

  return {
		isLoading,
		potenciasMedidor,
		corrientesMedidor,
        factoresPotenciaMedidor,
        getMediciones
  }
}