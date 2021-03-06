import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>POKEAPI </h1>
        <div className="links"> 
            <Link to="/pokemons">Pokemons</Link> |{""}
            <Link to="/alumno">Alumno</Link>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;