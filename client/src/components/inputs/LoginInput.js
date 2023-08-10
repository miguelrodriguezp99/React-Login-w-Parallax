import { useNavigate } from 'react-router-dom'
import '../../styles/login-input.css'

//Hacemos que sea una funcion que recibe un parametro word

function LoginInput({word, id, func}) {

    
    return (
      <div className="form__group field">
        <input id={id} type="input" className="form__field" placeholder="Name" 
        onChange={e => func(e.target.value)}
         />
        <label htmlFor="name" className="form__label">{word}</label>
      </div>
    )
}   

export default LoginInput