import '../../styles/login-button.css'
import {useNavigate} from 'react-router-dom';

function LoginButton({word, route}) {
    const navigate = useNavigate();

    if(route === undefined){

        return (
            <button type ="submit" className='lgn-btn'>
                {word}
            </button>
        )
    }
    else{
        return (
            <button type ="submit" className='lgn-btn' onClick={() => navigate(`/${route}`)}>
                {word}
            </button>
        )
    }

}   

export default LoginButton