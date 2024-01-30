import React from 'react'
import './Header.css'
import logo from '/investment-calculator-logo.png'

const Header = () => {
  return (
    <header id="header">
        <img src={logo} alt="Investment Calculator"/>
        <h1>React Investment Calculator</h1>
    </header>
  )
}

export default Header