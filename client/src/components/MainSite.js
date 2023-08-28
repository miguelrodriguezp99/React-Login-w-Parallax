
import React from 'react'
import Menu from './menu/Menu'
import ParallaxStars from './menu/ParallaxStars';

const MainSite =() => {

  return (
    <>
      <ParallaxStars />
      <div className='menu-container'>
          <Menu/>
      </div>

    </>
    );
};

export default MainSite