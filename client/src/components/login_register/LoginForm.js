import '../../styles/mainsite.css'
import '../../styles/login2.css'
import React from 'react'
import LoginInput from '../inputs/LoginInput';
import PasswordInput from '../inputs/PasswordInput';
import LoginButton from '../buttons/LoginButton';
import {fetchLoggin} from '../../services/fetchLoggin'

const LoginForm =({changeLoggedIn}) => {
  return (
      <>
        <form onSubmit={(event) => {fetchLoggin(event, changeLoggedIn)}}>
        <div className='login-container'>
            <div className='lgn-text'>
              <span>LOGIN</span>
            </div>
              <LoginInput word={"User"} id='login-input'/>
              <PasswordInput id='password-input'/>
            <br />
            <div className='lgn-btns'>
              <LoginButton word={"Register"} route={"register"} className='lgn-btn'/>
              <LoginButton word={"Login"} className='lgn-btn'/>
            </div>
        </div>
      </form>
      </>
    );
};

export default LoginForm;