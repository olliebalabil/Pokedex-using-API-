import React, { useState } from "react"
import Pokecard from "../Pokecard/Pokecard"
import "./Pokedex.css"

export default function Pokedex() {

  const pokemonData = [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
  ];
  const el = pokemonData[0]
  return (
    <>
     <h1>Pokédex</h1>
      <div className="pokedex-div">
       
        {pokemonData.map((el) => <Pokecard id={el.id} name={el.name} type={el.type} image={el.image} />)}
      </div>
    </>
  )
}


