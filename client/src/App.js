import React, { useContext, useEffect, useState } from 'react'

import {Route, Routes, useLocation} from 'react-router-dom';

import TicTacToe from './components/TicTacToe';
import MainSite from './components/MainSite';
import LoginSite from './components/LoginSite';
import RegisterSite from './components/RegisterSite';
import Projects from './components/Projects';
import Models from './components/Models';
import { useChangeHtmlTag } from './hooks/changeHtmlTag';
import { LogginContext } from './context/loggin';

function App() {
  const {loggin, setLoggin} = useContext(LogginContext)

  //Change html tag
  useChangeHtmlTag('html-menu')

  //Renderizar el logged in del local Storage en un useEffect
  useEffect(() => {
    const logged = localStorage.getItem('jwt')
    if(logged){
      setLoggin(true)
    }
  })
  
  const location = useLocation();

  function changeLoggedIn(logged){
    setLoggin(logged);
  }

  return (
    
      <div className="container" >
          <Routes location={location} key={location.pathname}>
            <Route index element={<LoginSite/>}/>
            <Route path='/login' element={<LoginSite/>}/>
            <Route path='/register' element={<RegisterSite changeLoggedIn={changeLoggedIn}/>}/>
            <Route path='/gallery' element={<Projects/>}/>
            <Route path='/models' element={<Models/>}/>
            {loggin && <Route path="/mainsite" element={<MainSite/>} />}
            {loggin && <Route path="/tictactoe" element={<TicTacToe/>}/>}
            
          </Routes>
      </div>
    
  )
}

export default App