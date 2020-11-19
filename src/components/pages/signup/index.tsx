import React, { useContext } from 'react'
import { Context } from '../../../newStore'
import { Pagecontainer } from '../../Compound/items/isLoggedout'

export const Signup = () => {
  
  const {width} = useContext(Context)

  return (
    <Pagecontainer width={width}>
      <h1>signup</h1>
    </Pagecontainer>
  )
}
