import React from 'react'
import BurgerLogo from '../../assets/Images/logo.png'
import './Logo.css'

function Logo() {
    return (
      <div className="Logo">
        <img src={BurgerLogo} alt="Logo" />
      </div>
    );
}

export default Logo
