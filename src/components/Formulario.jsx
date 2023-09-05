/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import ImoutSubmit from "./styleComponent/ImoutSubmit"
import useSelectMonedas from "../Hooks/useSelectMonedas"
import { monedas } from '../Data/monedas'
const Formulario = () => {

  const [criptos, setCriptos] = useState([])
  const [ moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
  
  useEffect(()=>{
    const consultarAPI = async() => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=5&tsym=USD'
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      
      const arrayCriptos = resultado.Data.map(cripto => {
        
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        }
          return objeto
      })
      setCriptos(arrayCriptos)
    }
    consultarAPI()
  },[])

    return (
      <div>
        <form>
          <SelectMonedas/>
          {moneda}
          <ImoutSubmit />
        </form>
      </div>
    )
}
export default Formulario
