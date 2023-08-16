import { useNavigate } from 'react-router-dom'
import '../../styles/login-input.css'

//Hacemos que sea una funcion que recibe un parametro word

function LoginInput({word, id, inputRef}) {
    
      return (
        <div className="form__group field">
          <input name='username' id={id} type="input" className="form__field" placeholder="Name" />
          <label htmlFor="name" className="form__label">{word}</label>
        </div>
      )
      
    
}   

export default LoginInput