import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from '../../organisms'
import { HomePage, CountPage } from '../../pages'


export const Loggedin = () => {
  return (
    <>
          <NavBar />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/count" component={CountPage} />
          </Switch>
    </>
  )
}
