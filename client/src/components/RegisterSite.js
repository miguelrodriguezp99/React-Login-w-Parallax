import '../styles/mainsite.css'
import '../styles/login2.css'
import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react'
import ParallaxStars from './menu/ParallaxStars';
import LoginInput from './inputs/LoginInput';
import PasswordInput from './inputs/PasswordInput';
import LoginButton from './buttons/LoginButton';


const RegisterSite =({changeLoggedIn}) => {
  const navigate = useNavigate();
  const [userNameReg, setUserNameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  

  useEffect(() => {
    document.documentElement.classList.add('html-menu')
    return () => {
        document.documentElement.classList.remove('html-menu')
    }
  }, [])

  useEffect(() => {
  const bearer = localStorage.getItem('jwt')
  if(bearer !== null){
    navigate('/main')
  }
  }, [])


  //Logica submit register
  const handleSubmitReg = async event => {
    event.preventDefault();

    console.log(userNameReg, passwordReg)

    const requestOptionsReg = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: userNameReg, password: passwordReg})
    }

    const response = await fetch('./register', requestOptionsReg)

    if (response.status >= 300){
      console.log("Error")
    } else if (response.status === 201){
      //localStorage.setItem('jwt', `Bearer ${response.text()}`)
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
            <LoginInput word={"Email"} id='email-input' func={setUserNameReg}/>
            <PasswordInput id='password-input' func={setPasswordReg}/>
            <br />
            <div className='lgn-btns'>
              <LoginButton word={"Login"} username={userNameReg} route={"login"}/>
              <LoginButton word={"Register"} />
            </div>
        </div>
      </form>
      </>
    );
};

export default RegisterSite