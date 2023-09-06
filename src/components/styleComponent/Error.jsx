/* eslint-disable react/prop-types */
import styled from "@emotion/styled"

const Div = styled.div`
   background-color: #B93734;
   color: #FFF;
   padding: 15px;
   font-size: 22px;
   text-transform: uppercase;
   font-family: 'Lato', sans-serif;
   font-weight: 700;
   text-align:center;
`

const Error = ({children}) => {
  return (
    <Div>
      {children}
    </Div>
  )
}

export default Error
