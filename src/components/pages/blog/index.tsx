import React, { useContext } from 'react'
import { Context } from '../../../newStore'
import { Pagecontainer } from '../../Compound/items/isLoggedout'

export const Blog = () => {
  
  const {width} = useContext(Context)

  return (
    <Pagecontainer width={width}>
      <h1>Blog</h1>
    </Pagecontainer>
  )
}
