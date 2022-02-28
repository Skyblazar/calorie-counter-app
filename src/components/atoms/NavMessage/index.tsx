import React from 'react'
import styled from 'styled-components';


const Message = styled.h1`
  font-size: 43px;
  color:white;
  font-weight: 700;
  margin-top: 2rem;
  @media screen and (min-width: 1500px){
    margin-top: 3rem;
    font-size: 50px;
  }
`

interface Props{
  message: string
  lead:string
}

export const Navmessage:React.FC <Props>  = ({message,lead}) => {
  return (
      <Message><span style={{fontWeight:500}}> {lead}  </span> {message}</Message>
  )
}

