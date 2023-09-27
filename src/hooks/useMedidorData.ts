import { useEffect, useState } from 'react'
import { LicApi } from '../api/LicApi';
import { Medidor } from '../interfaces/interfaces';

export const useMedidorData = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [medidoresState, setMedidoresState] = useState<Medidor[]>([]);

    const getMedidores = async() => {

        try {
            const medidoresStatePromise = LicApi.get<Medidor[]>('api/suministros');
            
            const response = await medidoresStatePromise;
            
            setMedidoresState( response.data );
            
            setIsLoading(false);

        } catch (error) {
            console.error('Error al obtener medidores:', error);
            setIsLoading(false);
        }
           
    }


    useEffect(() => {
        
        getMedidores();
  
    }, [])


    return {
        isLoading,
        medidoresState,
    }
}