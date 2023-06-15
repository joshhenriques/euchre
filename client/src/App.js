import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Play from "./pages/Play";
import Friends from "./pages/Friends";
import Room from "./pages/Room";
import Login from "./pages/Login"
import Register from "./pages/Register"
import background_img from "./images/background.png"



function App() {
  return (
    <main className="main">
        <img
          className= "background_img"
          src={background_img}
          alt="background img"
        />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/play" element={<Play/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/room/:id" element={<Room />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
