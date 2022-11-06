import React from 'react'
import {BiMenu} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import './Header.css'
import {BsCart} from 'react-icons/bs'

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
            <Link to={'/'}>activate SIM</Link>
            <Link to={'/'}>support</Link>
            <p><Link className='sign-in' to={'/'}>sign in</Link></p>
            <p>|</p>
            <div className='cart'>
            <Link className = 'cart-text' to={'/'}>cart</Link>
            <Link to ={''}><BsCart className='cart-icon' size={'1.3rem'} color ="#9b9b9b"/></Link>
            </div>
           
          
        </div>
        
        </div>
        {/* <hr color='#bbbcbc'/> */}
    </div>
  )
}

export default Header