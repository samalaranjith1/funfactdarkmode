import React, { useState } from 'react'
import logo from '../images/logo.svg';
import slideoff from '../images/slideoff.png';
import slideon from '../images/slideon.png';

function Nav(props) {
  const [slide,setSlide]=useState(slideon);

  function toggleslide(){
    props.toggle();
    setSlide(pd=>{
     return (pd==slideon ?slideoff:slideon);
  })
}
  

  return (
    <header>  
      <nav className='nav'>
            <img src={logo} alt="image" className='nav-img'></img>
            <ul className='nav-items'>
                <li>Light</li>
                <li><div onClick={toggleslide}><img src={slide} className='nav-slide-img'/></div></li>
                <li>Dark</li>
            </ul>
        </nav>
    </header>

  )
}

export default Nav