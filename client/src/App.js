import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";



function App() {
  return (
    <main className="main">
        
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
