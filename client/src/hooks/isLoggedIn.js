import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react'

export function useLoggedIn () {
    const navigate = useNavigate();
    useEffect(() => {
        const bearer = localStorage.getItem('jwt')
        if(bearer !== null){
          navigate('/mainsite')
        }
        }, [])
}