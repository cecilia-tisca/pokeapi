import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom;"
import './index.css';
import App from './App';
import Matricula from "./routes/matricula"
import PokemonId from "./routes/pokemonId"
import Pokemons from "./routes/pokemons"
import { Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

