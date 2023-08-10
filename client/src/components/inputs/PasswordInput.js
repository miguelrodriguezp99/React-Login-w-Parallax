import { useNavigate } from 'react-router-dom'
import '../../styles/login-input.css'

//Hacemos que sea una funcion que recibe un parametro word

function PasswordInput({id, func}) {

  const navigate = useNavigate();

    return (
        <div className="form__group field" >
        <input id={id} type="password" className="form__field" 
        placeholder="Name" 
        onChange={e => func(e.target.value)}/>
        <label htmlFor="name" className="form__label">Password</label>
      </div>
    )
}   

export default PasswordInput