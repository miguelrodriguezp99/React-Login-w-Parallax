import React, {useEffect, useState} from 'react'
import '../styles/login.css'
import {useNavigate} from 'react-router-dom';


function LoginForm({changeLoggedIn}){

    //TODO Añadir LocalStorage
    //En caso de que tengamos un Bearer valido en el localStorage entonces
    //Hacemos un navigate directamente a /main
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [userNameReg, setUserNameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
      const bearer = localStorage.getItem('jwt')

      if(bearer !== null){
        navigate('/main')

      }
    }, [])
    
    
    //const navigate = useNavigate();
  
    //Logica submit login
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
        navigate('/main')
      }
    }

    //Logica submit register
    const handleSubmitReg = async event => {
      event.preventDefault();
      const loginFor = document.getElementById("lg-clck")

      const requestOptionsReg = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userNameReg, password: passwordReg})
      }

      const response = await fetch('./register', requestOptionsReg)

      if (response.status >= 300){
        console.log("Error")
      } else if (response.status === 201){
        localStorage.setItem('jwt', `Bearer ${response.text()}`)
        loginFor.click()
      }
    }
  
return (
      <div>
        <title>Slide Navbar</title>
        <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet" />
        <div className="main">  	
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form onSubmit={handleSubmitReg}>
              <label htmlFor="chk" aria-hidden="true">Sign up</label>
              <input type="text" name="txt" placeholder="User name" required />
              <input type="email" name="email" placeholder="Email" value={userNameReg} onChange={e => setUserNameReg(e.target.value)} required />
              <input type="password" name="pswd" placeholder="Password" value={passwordReg} onChange={e => setPasswordReg(e.target.value)} required />
              <button type="submit">Sign up</button>
            </form>
          </div>
          <div className="login">
            <form onSubmit={handleSubmit}>
              <label id="lg-clck" htmlFor="chk" aria-hidden="true">Login</label>
              <input type="email" name="email" placeholder="Email" value={userName} onChange={e => setUserName(e.target.value)} required />
              <input type="password" name="pswd" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
              <button type="submit" id='lgnbutton'>Login</button>
            </form>
          </div>
        </div>
      </div>
    );

}

export default LoginForm;


