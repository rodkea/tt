export const obtenerFechaAyer = () => {
  const fechaActual = new Date();
  fechaActual.setDate(fechaActual.getDate() - 1); // Resta un día a la fecha actual  
  console.log(fechaActual)
  return fechaActual
}

export const fechaUrlFormat = ( date : Date ) => {  
  const dia = String(date.getUTCDate()).padStart(2,'0')
  const mes = String(date.getUTCMonth() + 1).padStart(2,'0')
  const anio = String(date.getUTCFullYear())
  return `${dia}-${mes}-${anio}`
}

export const inputDateFormat = (date : Date ) => {
  const dia = String(date.getUTCDate()).padStart(2,'0')
  const mes = String(date.getUTCMonth() + 1).padStart(2,'0')
  const anio = String(date.getUTCFullYear())
  return `${anio}-${mes}-${dia}`

}