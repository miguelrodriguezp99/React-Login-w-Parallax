import { useContext } from "react";
import { LogginContext } from "../context/loggin";
import {useNavigate} from 'react-router-dom';

async function performLogin(user, pass) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: user, password: pass })
    };
  
    const response = await fetch('./register', requestOptions);
    return response;
}

export function useRegister () {
    const { setLoggin } = useContext(LogginContext);
    const navigate = useNavigate();
  
    async function register(event) {
      event.preventDefault();
      const fields = new window.FormData(event.target);
      const user = fields.get('username');
      const pass = fields.get('password');
  
      const response = await performLogin(user, pass);
  
      if (response.status >= 300) {
        setLoggin(false);
      } else {
        localStorage.setItem('jwt', `Bearer ${await response.text()}`);
        navigate('/login');
        setLoggin(true);
      }
    }
  
    return register;

}
