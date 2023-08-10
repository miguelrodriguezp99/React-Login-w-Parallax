import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import '../styles/menu.css'

const  Menu = ({changeLoggedIn}) => {
    const navigate = useNavigate();

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
            <li><a href="#">ARCHIVES</a></li>
            <li><a href="#">TAGS</a></li>
            <li><a href="#">CATEGORIES</a></li>
            <li><a href="#" onClick={()=> {
                console.log('logout')
              localStorage.removeItem('jwt')
              changeLoggedIn(false)
              navigate('/login')
              } }>LOG OUT</a></li>
            </ul>
        </div>
    );

}

export default Menu;
