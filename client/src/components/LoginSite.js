import '../styles/mainsite.css'
import '../styles/login2.css'
import React, {useState} from 'react'
import ParallaxStars from './menu/ParallaxStars';
import { useLoggedIn } from '../hooks/isLoggedIn';
import LoginForm from '../components/login_register/LoginForm'

const LoginSite =({changeLoggedIn}) => {
  
  //Check if user is logged in (CUSTOM HOOK)
  useLoggedIn();

  return (
      <>
        <ParallaxStars /> 
        <LoginForm changeLoggedIn={changeLoggedIn}/>
      </>
    );
};

export default LoginSite