import React from "react"
import {useParams} from 'react-router-dom';
import Navbar from "../components/navbar";
export default function PokemonId() {
    let params = useParams();

    
    return (
        <div>
            <Navbar />
            <h1>Info: </h1>
         </div>
    )
    
}
