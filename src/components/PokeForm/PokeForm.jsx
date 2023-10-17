import React from "react"
import "./PokeForm.css"

export default function PokeForm({ inputText, setInputText , setToSearch,setShowComponent}) {

  const handleInput = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    //gets data from api
    e.preventDefault()
    setToSearch(e.target[0].value.toLowerCase())
    setShowComponent(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Enter a Pokemon"
          value={inputText}
          onChange={handleInput}
          className="input-field" />
        <input type="submit" className="submit-button"/> 
      </form>
    </>
  )
}