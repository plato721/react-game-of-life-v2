import React from "react"
import "./App.css"
import Board from "./containers/board"

const App = () => (
  <div className="App">
    <div>
      <div className="App-header">
        <h2>{"Conway's Game of Life"}</h2>
      </div>
      <Board />
    </div>
  </div>
)

export default App
