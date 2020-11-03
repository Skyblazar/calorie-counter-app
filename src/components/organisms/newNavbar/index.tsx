import React,{useContext} from 'react'
import styled from 'styled-components';
import img from "../../../img/navLogo.svg"; 
import bg from "../../../img/navBg.svg"
import { NavLink, Navmessage } from '../../atoms';
import { Context } from '../../../newStore';

export const NavContainer = styled.div `
  display: flex;
  position: fixed;
  justify-content: space-between;
  flex-direction:column;
  min-width: 300px;
  width: 25%;
  background-color: #5FB784;
  background-image: url(${bg}) ;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size: 80%;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  padding: 100px 16px 0 32px;

  @media screen and (min-width: 1500px){
    padding: 100px 16px 0 80px;
  }
  @media screen and (max-width: 768px){
    padding: 100px 16px 0 16px;
  }
`
const Logo = styled.img`
  width: 80px;
  height: 80px;
  @media screen and (min-width: 1500px){
    width: 120px;
    height: 120px;
  }
`
const Navcontent = styled.div`
  height: 600px; 
`
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  height: 150px;
`
const NavFooter = styled.div`
  display: flex; 
  justify-content: center;
  border-top: rgba(255,255,255,0.2) solid 1px;
  width: 100%;
  position: absolute;
  background-color: #5FB784;
  bottom: 0;
  left:0;
  padding:1em 1em; 
`
const Footercontent = styled.h4`
  color:white;
  font-weight: 400;
`


export const NavBar = () => {

  const {isLoggedin} = useContext(Context)

  return (
    <>
      <NavContainer>
        <Navcontent>
          <Logo src={img}></Logo>
          <Navmessage lead="Get" message="Healthy Eat Healthy" />
          <Nav>
            {isLoggedin ? (<>
            <NavLink name= "Home" to="/"/>
            <NavLink name= "Weekly" to="/weekly"/>
            <NavLink name= "All time" to="/alltime"/>
            <NavLink name= "Profile" to="/profile"/>
            </>) : (<>
            <NavLink name= "Signup" to="/signup"/>
            <NavLink name= "Login" to="/login"/>
            <NavLink name= "Blog" to="/blog"/>
            </>)}
          </Nav>
        </Navcontent>
        <NavFooter>
          <Footercontent>&#169; caloric 2020</Footercontent>
        </NavFooter>
      </NavContainer>
    </>
  )
}