import React from "react"
import {useParams} from 'react-router-dom';
import Navbar from "../components/navbar";
import Pokemon1 from "./pokemon";
import "../index.css";
import Pokedex from "../components/pokedex";
import { getPokemonData, getPokemons1 } from "../api";
import { Outlet } from "react-router-dom";
import Pokemons from "./pokemons";

const { useState, useEffect } = React;

const PokemonId = (props) => {
  const { pokemon } = props;
    
    const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [name, setTot] = useState("");
  const [loading, setLoading] = useState(true);
  const [imgagen, setImg] = useState('');
  const [poke, setPoke] = useState([])
  
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons1(200, 0 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      for(let i = 0; i <= pokemons.length; i++ ){
        if(pokemons[i].id == params.pokeID){
          console.log(pokemons[i])
          setPoke(pokemons[i])
          setImg(pokemons[i].sprites.other.dream_world.front_default);
        }
      } 
      setLoading(false);
      setTotal(Math.ceil(data.count / 200));
    } catch (err) {}
  };
console.log(poke)
  setTimeout(() => {
    setLoading(false);
    
    
}, 1000);
const params = useParams();
    
    useEffect(() => {
      fetchPokemons();
    }, []);
  

    
    return (
        <div>
          {loading ? (
          <div>Cargando pokemones</div>
        ) : (
          <div>
            
            {pokemons.filter((pokemon) => {
                return pokemon.id == params.pokemonId;
              }).map((pokemon, idx) => {
          return (
            <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="pokemon-img"
                />
            </div>
            <div className="card-body">
                <div className="card-top">
                <h3>{pokemon.name}</h3>
                <div>#{pokemon.id}</div>
                </div>
                <div className="card-bottom">
                <div className="pokemon-type">
                    {pokemon.types.map((type, idx) => {
                    return <div key={idx}>{type.type.name}</div>;
                    })}
                    
                </div>
                <div></div>
                </div>
            </div>
         </div>  
          );
        })}
          </div>
            
        )}
         </div>
    )
    
}

export default PokemonId;