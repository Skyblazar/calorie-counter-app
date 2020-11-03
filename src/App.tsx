import React, { useContext } from "react";
import { Loggedin, Loggedout } from "./components/Compound";
import { Context } from './newStore'



export const App = () => {

  const { isLoggedin } = useContext(Context)
  
  return (
    isLoggedin ? <Loggedin/> : <Loggedout/>   
  )
};
