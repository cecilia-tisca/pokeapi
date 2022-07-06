import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import App from './App';
import Matricula from "./routes/matricula"
import PokemonId from "./routes/pokemonId"
import Pokemons from "./routes/pokemons"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Route path="/" element = {<App />}></Route>
    </BrowserRouter>
  </React.StrictMode>
);

