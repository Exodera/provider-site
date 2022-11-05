import React from 'react'
import {BiMenu} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='nav'>
        <div className='header'>

       
        <div className='logo-menu'>
            <button><BiMenu size={'2.3rem'}/></button>
            <h1>swyftn<span>e</span>t</h1>
        

        </div>

        <div className='menu-links'>
            <Link to={'/'}>shop</Link>
            <Link to={'/'}>my swyft</Link>
            <Link to={'/'}>activate sim</Link>
            <Link to={'/'}>support</Link>
            <Link to={'/'}>sign in</Link>
            <Link to={'/'}>cart</Link>

        </div>
        
        </div>
        <hr color='#bbbcbc'/>
    </div>
  )
}

export default Header