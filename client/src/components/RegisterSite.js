import '../styles/mainsite.css'
import '../styles/login2.css'
import {useNavigate} from 'react-router-dom';
import React from 'react'
import ParallaxStars from './menu/ParallaxStars';

import { useLoggedIn } from '../hooks/isLoggedIn';
import RegisterForm from '../components/login_register/RegisterForm'


const RegisterSite =() => {
  const navigate = useNavigate();

  //Check if user is logged in
  useLoggedIn()

  return (
      <>
        <ParallaxStars /> 
        <RegisterForm/>
      </>
    );
};

export default RegisterSite