import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import PokemonDetail from "./pages/PokemonDetail.jsx";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/quest-pokedex" element={<Home/>}/>
        <Route path="pokemon/:name" element={<PokemonDetail/>}/>
      </Routes>
      
    </Router>
  )
}

export default App
