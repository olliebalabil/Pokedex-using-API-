import React, { useState, useEffect } from "react"
import { Profile, PokeForm } from "./components"
import "./App.css"

export default function App() {

  const [inputText, setInputText] = useState("")
  const [toSearch, setToSearch] = useState("")
  const [showComponent, setShowComponent] = useState(false)
 

  return (
    <>
      <div className="app-div">
        <h1>Gotta' Catch 'em All!</h1>
        {showComponent &&
          <Profile
            toSearch={toSearch} />
        }
        {!showComponent &&
          <div>
            <h2>Enter a pokemon to find out more!</h2>
            <img src="../public/pokeball.png" alt="pokeball" id="pokeball" />
          </div>
        }

        <PokeForm
          inputText={inputText}
          setInputText={setInputText}
          setToSearch={setToSearch}
          setShowComponent={setShowComponent} />
      </div>
    </>
  )
}