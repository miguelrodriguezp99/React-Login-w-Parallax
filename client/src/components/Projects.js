import React from 'react'
import ParallaxStars from './menu/ParallaxStars';
import Gallery from './projetcs/Gallery';
import LoginButton from './buttons/LoginButton';

const Projects =() => {

    return (
      <>
        <ParallaxStars />
        
        <div className='menu-container'>
            <div className='lgn-text-projects'>
              <span className='projects-span'>PROJECTS</span>
            </div>
            <Gallery />
            <div className='exit-button-div'>
              <LoginButton word={"RETURN"} route={"mainsite"} className='exit-button'/>
            </div>
        </div>

      </>
      );
};

export default Projects