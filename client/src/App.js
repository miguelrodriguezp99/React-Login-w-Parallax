import React, { useEffect, useState } from 'react'
import './styles/login.css'
import {Route, Routes, useLocation} from 'react-router-dom';

import LoginForm from './components/LoginForm';
import MainSite from './components/MainSite';
import TicTacToe from './components/TicTacToe';
import Cards from './components/projects/Cards';


function App() {

  //Renderizar el logged in del local Storage en un useEffect
  useEffect(() => {
    const logged = localStorage.getItem('jwt')
    if(logged){
      setLoggedIn(true)
    }
  })
  
  const [loggedIn, setLoggedIn] = useState(false)
  const location = useLocation();

  function changeLoggedIn(logged){
    setLoggedIn(logged);
  }

  return (
    <>
      <div className="container" >
          <Routes location={location} key={location.pathname}>
            <Route index element={<LoginForm changeLoggedIn={changeLoggedIn}/>}/>
            <Route path='/login' element={<LoginForm changeLoggedIn={changeLoggedIn}/>}/>
            {<Route path="/main" element={<MainSite changeLoggedIn={changeLoggedIn}/>}/>}
            {loggedIn && <Route path="/projects" element={<Cards/>}/>}
            {loggedIn && <Route path="/tictactoe" element={<TicTacToe/>}/>}
          </Routes>
      </div>
    </>
  )
}

export default App