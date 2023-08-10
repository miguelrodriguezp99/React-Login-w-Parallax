import '../../styles/login-button.css'
import {useNavigate} from 'react-router-dom';

function LoginButton({word, route, className}) {
    const navigate = useNavigate();

    if(route === undefined){

        return (
            <button type ="submit" className={`lgn-btn ${className}`}>
                {word}
            </button>
        )
    }
    else{
        return (
            <button  type ="submit" className={`lgn-btn ${className}`} onClick={() => navigate(`/${route}`)}>
                {word}
            </button>
        )
    }

}   

export default LoginButton