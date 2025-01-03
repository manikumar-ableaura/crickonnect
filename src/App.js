import React from 'react';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import MyTeam from './components/MyTeam/MyTeam';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myteam' element={<MyTeam/>} />
      </Routes>


    </div>
  );
}

export default App;
