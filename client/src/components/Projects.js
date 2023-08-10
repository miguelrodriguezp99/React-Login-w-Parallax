import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react'
import ParallaxStars from './menu/ParallaxStars';
import Gallery from './projects/Gallery';
import LoginButton from './buttons/LoginButton';

const Projects =() => {
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
            <div className='lgn-text-projects'>
              <span className='projects-span'>PROJECTS</span>
            </div>

            <Gallery />
            <div className='exit-button-div'>
              <LoginButton word={"EXIT"} route={"mainsite"} className='exit-button'/>
            </div>
            
        </div>

      </>
      );
};

export default Projects