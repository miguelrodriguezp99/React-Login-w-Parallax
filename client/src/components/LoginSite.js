import '../styles/mainsite.css'
import '../styles/login2.css'
import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react'
import ParallaxStars from './menu/ParallaxStars';
import LoginInput from './inputs/LoginInput';
import PasswordInput from './inputs/PasswordInput';
import LoginButton from './buttons/LoginButton';


const LoginSite =({changeLoggedIn}) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

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


  //const handlesubmit que solo diga hola
  const handleSubmit = async event => {
    event.preventDefault();
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: userName, password: password })
    };

    const response = await fetch('./login', requestOptions)

    if (response.status >= 300){
      console.log("Error")
    } else if (response.status === 200){
      localStorage.setItem('jwt', `Bearer ${response.text()}`)
      changeLoggedIn(true)
      navigate('/mainsite')
    }
  }

  return (
      <>
        <ParallaxStars /> 
        <form onSubmit={handleSubmit}>
        <div className='login-container'>
            <div className='lgn-text'>
              <span>LOGIN</span>
            </div>
            <LoginInput word={"User"} id='login-input' func={setUserName}/>
            <PasswordInput id='password-input' func={setPassword}/>
            <br />
            <div className='lgn-btns'>
              <LoginButton word={"Login"} username={userName}/>
              <LoginButton word={"Register"} route={"register"} />
            </div>
        </div>
      </form>
      </>
    );
};

export default LoginSite