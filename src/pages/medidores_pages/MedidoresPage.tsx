import { SuministrosCard } from "../../components/suministros-card/SuministrosCard"
import { useMedidorData } from "../../hooks/useMedidorData"

export const MedidoresPage = () => {

  const { medidoresState } = useMedidorData()

  return(
    <>
    { medidoresState && medidoresState.map( ( medidor ) => 

      <SuministrosCard
        medidor={ medidor }
      />)}
    </>
  )
}