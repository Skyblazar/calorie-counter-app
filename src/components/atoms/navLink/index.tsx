import React from 'react'
import styled from 'styled-components';
import {NavLink as LinkR} from "react-router-dom"



const Link = styled(LinkR)`
  font-size: 25px;
  text-decoration: none;
  color:white;
  font-weight: 600;
  margin-top: 1.2rem;
  @media screen and (min-width: 1500px){
    font-size: 30px;
  }

  &.active {
    color: #185331;
  }

`

const Linkcontainer = styled.div`
  margin-top: 1.5rem;
  width: max-content;
  @media screen and (min-width: 1500px){
    margin-top: 2.5rem;
  }
 
 
`
const Hover = styled.div`
  width: 100%;
  height: 5px;
  opacity: 0;
  background-color: #185331;
  margin-top: 0.5em;
  ${Linkcontainer}:hover &{
    opacity: 1;
    transition: .4s all ease-in-out ;
  }
`

interface Props{
  name: string
  to?:string
}

export const NavLink:React.FC <Props>  = ({name, to="/"}) => {
  return (
    <Linkcontainer>
      <Link to={to} activeClassName="active">
      {name}
      </Link>
      <Hover/>
    </Linkcontainer>
  )
}

