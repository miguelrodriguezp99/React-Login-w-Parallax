import '../../styles/mainsite.css'
import '../../styles/login2.css'
import React from 'react'
import LoginInput from '../inputs/LoginInput';
import PasswordInput from '../inputs/PasswordInput';
import LoginButton from '../buttons/LoginButton';
import {useRegister} from '../../services/fetchRegister'

const RegisterForm =() => {
    const register = useRegister();



    return (
        <>
        <form onSubmit={(event) => {register(event)}}>
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

export default RegisterForm;