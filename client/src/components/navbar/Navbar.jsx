import React, { useState } from 'react'
import './navbar.scss'

function Navbar () {
  const [open, setOpen] = useState(false);

 
  return (
    <nav>
      <div className='left'>
        <a className='logo' href='/'>
          <img src='./logo.png' alt='' />
          <span>Creamia </span>
        </a>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <a href='/'>Agents</a>
      </div>
      <div className='right'>
        <a href='/'>Sign In</a>
        <a href='/' className='register'>
          Sign up
        </a>
        <div className='menuIcon'>
          <img onClick={() => setOpen((prev) => !prev)} src='/menu.png' alt='' />
        </div>
    <div className={open ? 'menu active' : 'menu'}>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
          <a href='/'>Agents</a>
          <a href='/'>Sign In</a>
          <a href='/'>Sign Up</a>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
