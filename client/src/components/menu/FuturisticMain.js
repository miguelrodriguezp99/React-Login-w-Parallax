import '../../styles/mainsite.css'
import {useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react'

const FuturisticMain =({changeLoggedIn}) => {
  const navigate = useNavigate();


  useEffect(() => {
    document.body.classList.add('menu1-body')
    return () => {
      document.body.classList.remove('menu1-body')
    }
  }, [])

    return (
          <div className="all">
            <div onClick={() => navigate('/projects')} className="lefter">
              <div className="text">Projects</div>
            </div>
            <div onClick={() => navigate('/tictactoe')}className="left">
              <div className="text">Tic Tac Toe</div>
            </div>
            <div className="center">
              <div className="explainer"><span>Menu</span></div>
              <div className="text">Miguel Rodriguez Perez</div>
            </div>
            <div onClick={() => navigate('/mainsite')} className="right">
              <div className="text">Main Site 2</div>            
            </div>
            <div onClick={()=> {
              localStorage.removeItem('jwt')
              changeLoggedIn(false)
              navigate('/login')
              } }
              className="righter">
              <div className="text">Log Out</div>
            </div>
          </div>
      );
};

export default FuturisticMain