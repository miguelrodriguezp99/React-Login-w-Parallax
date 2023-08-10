import '../../styles/parallaxStars.css'
import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react'


const ParallaxStars =() => {
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
        
        <div>
          
          <meta charSet="UTF-8" />
          <title>CodeAtNow | Parallax Star background in CSS</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
          <link rel="stylesheet" href="./style.css" />
          {/* partial:index.partial.html */}
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" type="text/css" />
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
          <div id="title">

          <br />
          </div>
        </div>

 

      </>
      );
};

export default ParallaxStars