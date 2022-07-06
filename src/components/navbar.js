import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>POKEAPI </h1>
        <Link to="/pokemons">Pokemons</Link> |{""}
        <Link to="/pokemon/:pokemonId">Pokemon Id</Link> |{""}
        <Link to="matricula">Matricula</Link>
      </div>
    </nav>
  );
};

export default Navbar;