import styled from "@emotion/styled"
const ImoutSubmit = () => {
   const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 15px;
    &:hover {
        background-color:#7A7DFE;
        cursor : pointer
    }
  
` 
  return (
   <InputSubmit type="submit" value="Cotizar" ></InputSubmit>
  )
}

export default ImoutSubmit
