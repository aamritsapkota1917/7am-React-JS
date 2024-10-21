// rafce
import React from 'react'
import Nav from './Nav'
import { Test, Third } from './Third'

const Second = () => {
  return (
    <>
    <Nav/>
    <h2 style={{color:'red',backgroundColor:'blue'}}>this is a second content</h2>
    <hr/>
    <Third/>
    <Test/>
    </>
    
  )
}

export default Second