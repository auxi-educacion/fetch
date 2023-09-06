/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import ImoutSubmit from "./styleComponent/ImoutSubmit"
import useSelectMonedas from "../Hooks/useSelectMonedas"
import { monedas } from '../Data/monedas'
import Error from "./styleComponent/Error"

const Formulario = ({setMonedas}) => {

  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)
  const [ moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
  const [ cripto, SelectCripto] = useSelectMonedas('Elige tu Criptomoneda', criptos)
  
useEffect(()=>{setError(false)},[moneda,cripto])
  
  useEffect(()=>{
    const consultarAPI = async() => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=7&tsym=USD'
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

  const handleSubmit = e => {
    e.preventDefault()

     if([moneda, cripto].includes('')){
        setError(true)
        return
     }
     setMonedas({
      moneda,
      cripto
     })
  }
    return (
      <>
        {error && <Error>todos los campos son obligatorios</Error>}
        <form
          onSubmit={handleSubmit}>
          <SelectMonedas/>
          <SelectCripto/>
          <ImoutSubmit />
        </form>
      </>
    )
}
export default Formulario
