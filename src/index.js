import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css';
import App from './App';
import Matricula from './routes/matricula';
import PokemonId from './routes/pokemonId';
import Pokemons from './routes/pokemons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<App />} />
        <Route path="/matricula" element={<Matricula />} />
        <Route path="/pokemonId" element={<PokemonId />} />
        <Route path="/pokemons" element={<Pokemons />} />
    
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

