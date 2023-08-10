import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react'
import Menu from './Menu'
import ParallaxStars from './menu/ParallaxStars';


const MainSite =({changeLoggedIn}) => {
  const navigate = useNavigate();

  //Añado la etiqueta html-menu al html para que no choque con las demás cosas. 
  useEffect(() => {
    document.documentElement.classList.add('html-menu')
    return () => {
        document.documentElement.classList.remove('html-menu')
    }
  }, [])

    return (
      <>
        <ParallaxStars />
        <div className='menu-container'>
            <Menu changeLoggedIn={changeLoggedIn}/>
        </div>

      </>
      );
};

export default MainSite