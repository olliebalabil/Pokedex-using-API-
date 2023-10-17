import React, { useState, useEffect } from "react"
import "./Profile.css"

export default function Profile({ toSearch}) {

  const [pokemonData, setPokemonData] = useState({
    frontImageSrc: "",
    backImageSrc: "",
    height: null,
    type: "",
    hp: null,
    name: ""
  });

  

  useEffect(() => {
    getPokemon()
  }, [toSearch])

  async function getPokemon() {
    try {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${toSearch}`)
      const data = await result.json()
      let typesArr = []
      for (let i = 0; i < data.types.length; i++) {
        typesArr.push(data.types[i].type.name)
      }
      let typesStr = ""
      if (typesArr.length > 1) {
        typesStr = typesArr[0] + " and " + typesArr[1]
      } else {
        typesStr = typesArr[0]
      }
      setPokemonData({
        frontImageSrc: data.sprites.front_default,
        backImageSrc: data.sprites.back_default,
        height: data.height,
        type: typesStr,
        hp: data.stats[0].base_stat,
        name: data.name.toUpperCase()
      })

    } catch (err) {
      console.error(err)
    }

  }
  return (
    <>
      <div className="profile-div">
        <h2>{pokemonData.name}</h2>
        <h3>Type: {pokemonData.type}</h3>
        <div className="image">
          <img src={pokemonData.frontImageSrc} alt={toSearch} />
          <img src={pokemonData.backImageSrc} alt={toSearch} />
        </div>
        <p>HP {pokemonData.hp}</p>
        <p>Height:{pokemonData.height * 10}cm</p>
      </div>


    </>
  )
}