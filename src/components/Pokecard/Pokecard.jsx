import React, { useState } from "react"
import "./Pokecard.css"


export default function Pokecard({ id, name, type, image }) {

  return (
    <>
      <div className="card-div">
        <h1 className="card-h1">{name}</h1>
        <img src={image} alt={name} />
        <p>Type: {type}</p>
      </div>
    </>
  )
}