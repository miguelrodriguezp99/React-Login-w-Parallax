import { useContext, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import '../../styles/menu.css'
import { LogginContext } from "../../context/loggin";

const  Menu = () => {
    const navigate = useNavigate();
    const {setLoggin} = useContext(LogginContext);

    useEffect(() => {
        document.body.classList.add('menu-body')
        return () => {
            document.body.classList.remove('menu-body')
        }
    }, [])

    return (
        <div className='menu-text'>
            <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#" onClick={()=> { navigate('/gallery') } }>PROJECTS</a></li>
            <li><a href="#" onClick={()=> { navigate('/models') } }>MODELS</a></li>
            <li><a href="#">CATEGORIES</a></li>
            <li><a href="#" onClick={()=> {
              localStorage.removeItem('jwt')
              setLoggin(false)
              navigate('/login')
              } }>LOG OUT</a></li>
            </ul>
        </div>
    );

}

export default Menu;
