/* eslint-disable react/prop-types */
import {Precio, Pf, ResultadoStyle, Imagen} from '../components/styleComponent/ResultadoStyle'

const Resultado = ({resultado}) => {
  console.log(resultado)
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL} = resultado
  return (
    <ResultadoStyle>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='imagen cripto'/>
      <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Pf>El precio max del dia: <span>{HIGHDAY}</span></Pf>
        <Pf>El precio min del dia: <span>{LOWDAY}</span></Pf>
        <Pf>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Pf>
        <Pf>Ultima Actualizacion: <span>{LASTUPDATE}</span></Pf>
      </div>
    </ResultadoStyle>
  )
}

export default Resultado
