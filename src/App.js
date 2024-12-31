import React from 'react';
import { BrowserRouter, Router,Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import Login from './Login';
import Header from './components/Header';
import './App.css';
import Content from './components/content'; 
import OopsPage from "./OopsPage";


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="home">
          <h1 className='head'> STEP ONTO THE FIELD OF YOUR DREAMS!</h1>
        </section>
        <section id="para">
          <p className='parag'>Effortlessly organize and join cricket matches and tournaments—anytime, anywhere.</p>
        </section>
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
        <BrowserRouter>
        <Router>
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/oops" element={<OopsPage />} />
            </Routes>
        </Router>
        </BrowserRouter>
        <Content />
      </main>
    </div>
  );
}

export default App;
