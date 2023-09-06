import styled from "@emotion/styled"

export const Contenedor = styled.div`
max-width: 900px;
margin: 0 auto;
width: 90%;
@media (min-width: 992px){
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
}
`
export const Heading = styled.h1`
font-family: 'lato', sans-serif;
color: #FFF;
text-align: center;
font-weight: 700;
margin-top: 80px;
margin-bottom: 80px;
font-size: 34px;
&::after{
  content:'';
  width: 100px;
  height: 6px;
  background-color: #66a2fe;
  display: block;
  margin: 10px auto 0 auto;
}
`
export const Imagen = styled.img`
max-width: 400px;
width: 80%;
margin: 100px auto 0 auto;
display: block;`