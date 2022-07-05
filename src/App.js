import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './pages/Login';
import Nav from "./components/Nav"
import Home from './pages/Home'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  const [idLogin,setIdLogin]=useState(0);
  


  useEffect(() => {
    (
      async () => {
        const response = await fetch('https://localhost:44374/api/Auth/user', {
          method: 'GET',
          headers: { 'Content-type': 'application/json' },
          credentials: 'include',
        });
        //verifica daca exista cineva logat 
        //true afiseaza
        //false return login page
        
        //debugger;
        const content = await response.json();
        
        if(!content['title'])
        {
          setIdLogin(content[0].ID)
        }
      }
    )();
  });

  return (


    <div className="App">

      <BrowserRouter>
        <Nav idLogin={idLogin} setIdLogin={setIdLogin}/>

        <main className="form-signin auto w-200 m-auto">
          <Routes>
            <Route path="/" element={<Home idLogin={idLogin} />} />
            <Route path="/login" element={<Login setIdLogin={setIdLogin}/>} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

      </BrowserRouter>
    </div>
  );
}

export default App;
