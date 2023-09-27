import { Medidor } from '../../interfaces/interfaces';
import './suministros-card.css'
import { Link } from "react-router-dom";


interface Props {
  medidor : Medidor
}


export const SuministrosCard = ( { medidor } : Props ) => {

  return(
    <Link
      to={`/medidor/${medidor.id_suministro}`}
      className="suministros-card"      
    >
      <h2>{medidor.nombre}</h2>
      <h3>ID: { medidor.id_suministro }</h3>
      <h3>Serial: { medidor.serial }</h3>
    </Link> 
  )
}