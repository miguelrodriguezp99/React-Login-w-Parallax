import { useNavigate } from 'react-router-dom'
import '../../styles/login-input.css'

//Hacemos que sea una funcion que recibe un parametro word

function PasswordInput({id}) {

    return (
        <div className="form__group field" >
        <input name='password' id={id} type="password" className="form__field" 
        placeholder="Name" />
        
        <label htmlFor="name" className="form__label">Password</label>
      </div>
    )
}   

export default PasswordInput