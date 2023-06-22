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
import shuffleDeck from './gameFunctions/shuffleDeck';

function App() {

  

  var deck = ['9c', '9d', '9h', '9s',
            '10c', '10d', '10h', '10s',
            'jc', 'jd', 'jh', 'js',
            'qc', 'qd', 'qh', 'qs',
            'kc', 'kd', 'kh', 'ks',
            'ac', 'ad', 'ah', 'as',];

  deck = shuffleDeck(deck);

  const [trumpCard, setTrumpCard] = useState(deck[20])
  const [topCard, setTopCard] = useState('cardBack')

  return (
    <main className="main">
        <img
          className= "background_img"
          src={process.env.PUBLIC_URL + "/images/background.png"}
          alt="background img"
        />
        <div className="container">
        <Routes>
          <Route path="/" element={<Room trumpCard={trumpCard} topCard ={topCard} deck={deck}/>} />
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
