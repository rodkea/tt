export interface Corrientes {
  id_suministro: number,
  l1: number,
  l2: number,
  l3: number,
  timestamp: string,
}

export interface FactorPotencia {
  id_suministro: number,
  factor_potencia: number,
  timestamp: string,
}

export interface Medidor {
  nombre: string,
  id_suministro: number,
  serial: string
}

export interface Potencias {
  id_suminsitro: number,
  potencia_activa: number,
  potencia_reactiva: number,
  potencia_aparente: number,
  timestamp: string,
}