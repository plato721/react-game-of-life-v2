import React, { useState } from "react"
import "./App.css"
import PlayButton from "./components/PlayButton"
import Board from "./components/Board"

const App = () => {
  const defaults = {
    width: 50,
    height: 50,
    delay: 500,
  }

  const [playing, setPlaying] = useState(false)

  const handlePlayButtonClick = () => {
    setPlaying((playing) => !playing)
  }

  return (
    <div className="App">
      <div className="App-header">
        <h2>{"Conway's Game of Life"}</h2>
      </div>
      <Board
        width={defaults.width}
        height={defaults.height}
        playing={playing}
        tickDuration={defaults.delay}
      />
      <PlayButton clickHandler={handlePlayButtonClick} playing={playing} />
    </div>
  )
}
export default App
