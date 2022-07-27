import React from 'react'
import logo from './../styles/images/logo.png';
import kero from './../styles/images/kero.png';

export const Header = () => {
  return (
    <div className='navbar navbar-expand-lg navbar-light container-navbar'>
    <div className='container-fluid'>
      <a className='navbar-brand' href='/#' ><img className='logo' src={logo} alt="LOGO" /></a>
      <button className='navbar-toggler custom-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <div className='collapse navbar-collapse d-flex navbar-items' id='navbarNavAltMarkup'>
          <div className='navbar-nav list'>
            <a className='nav-link text-navbar container-link' aria-current='page' href='/#'>SCHEDULE</a>
            <a className='nav-link text-navbar container-link' href='/#'>SHOWS</a>
            <a className='nav-link text-navbar container-link' href='/#'>MARATHONS</a>
            <a className='nav-link text-navbar'  href='/#' tabIndex='-1'>PODCAST</a>
            <a href='/#' ><img className='kero' src={kero} alt="Kero" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}