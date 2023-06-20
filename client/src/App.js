//Style Imports
import './App.css';

//React imports
import { Routes, Route } from "react-router-dom";
import React, {useState} from 'react';

// Page Imports
import Home from "./pages/Home";
import Play from "./pages/Play";
import Friends from "./pages/Friends";
import Room from "./pages/Room";
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {

  return (
    <main className="main">
        <img
          className= "background_img"
          src={process.env.PUBLIC_URL + "/images/background.png"}
          alt="background img"
        />
        <div className="container">
        <Routes>
          <Route path="/" element={<Room/>} />
          <Route path="/play" element={<Play/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/room" element={<Room />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
