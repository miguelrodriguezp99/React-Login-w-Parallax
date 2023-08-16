import {useNavigate} from 'react-router-dom';
import React from 'react'
import Menu from './menu/Menu'
import ParallaxStars from './menu/ParallaxStars';

const MainSite =({changeLoggedIn}) => {

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