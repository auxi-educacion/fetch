import {Contenedor, Imagen, Heading} from './components/styleComponent/AppStyle'
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from "./components/Formulario"
import { useState,useEffect } from 'react'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

function App() {
const [monedas, setMonedas] = useState({})
const [resultado, setResultado] = useState({})
const [cargando, setCargando] = useState(false)

useEffect(()=>{
  if(Object.keys(monedas).length > 0) 
    {const cotizarCripto = async ()=>{
      setCargando(true)
      setResultado(false)
      const {moneda, cripto} = monedas
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
      
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setCargando(false)
      setResultado(resultado.DISPLAY[cripto][moneda])
  }
cotizarCripto()}
},[monedas])
  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt='imagenes criptomonedas'
      />
    <div>
      <Heading>Desde App</Heading>
      <Formulario
        setMonedas={setMonedas}
      />
      {cargando && <Spinner/>}
      {resultado.PRICE && <Resultado resultado = {resultado}/>}
    </div>
    </Contenedor>
  )
}

export default App
