import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css';
import App from './App';
import PokemonId from './routes/pokemonId';
import Pokemons from './routes/pokemons';
import Alumno from './routes/Alumno';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<App />} />
        <Route path="/alumno" element={<Alumno/>} />
        <Route path="/pokemons" element={<Pokemons />} >
          <Route path=":pokemonId" element={<PokemonId />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

