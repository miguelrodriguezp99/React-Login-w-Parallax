import '../styles/mainsite.css'
import '../styles/login2.css'
import {useNavigate} from 'react-router-dom';
import React from 'react'
import ParallaxStars from './menu/ParallaxStars';
import LoginInput from './inputs/LoginInput';
import PasswordInput from './inputs/PasswordInput';
import LoginButton from './buttons/LoginButton';
import { useLoggedIn } from '../hooks/isLoggedIn';


const RegisterSite =() => {
  const navigate = useNavigate();

  //Check if user is logged in
  useLoggedIn()

  //Logica submit register
  const handleSubmitReg = async event => {
    event.preventDefault();

    //Otra forma de hacerlo
    const { user, pass } = Object.fromEntries(new window.FormData(event.target))

    const requestOptionsReg = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: user, password: pass})
    }

    const response = await fetch('./register', requestOptionsReg)

    if (response.status >= 300){
      //TODO handle error
      console.log("Error")
    } else if (response.status === 201){
      navigate('/login')
    }
  }

  return (
      <>
        <ParallaxStars /> 
        <form onSubmit={handleSubmitReg}>
        <div className='login-container'>
            <div className='lgn-text'>
              <span>SIGN UP</span>
            </div>
            <LoginInput word={"User"} id='login-input' />
            <LoginInput word={"Email"} id='email-input'/>
            <PasswordInput id='password-input'/>
            <br />
            <div className='lgn-btns'>
              <LoginButton word={"Back"} route={"login"}/>
              <LoginButton word={"Register"} />
            </div>
        </div>
      </form>
      </>
    );
};

export default RegisterSite