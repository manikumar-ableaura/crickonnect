import React from 'react';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import MyTeam from './components/MyTeam/MyTeam';
import Booking from './components/Booking/Booking';


function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myteam' element={<MyTeam/>} />
        <Route path='/booking' element={<Booking/>} />
      </Routes>


    </div>
  );
}

export default App;
