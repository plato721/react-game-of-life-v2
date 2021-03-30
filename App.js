import React, { useState } from "react"
import "./App.css"
import PlayButton from "./components/PlayButton"
import Board from "./components/Board"
import Grid from "@material-ui/core/grid"
import Container from "@material-ui/core/container"

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
    <Container className="App" fixed>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item className="App-header">
          <h2>{"Conway's Game of Life"}</h2>
        </Grid>
        <Grid item>
          <Board
            width={defaults.width}
            height={defaults.height}
            playing={playing}
            tickDuration={defaults.delay}
          />
        </Grid>
        <Grid item>
          <PlayButton clickHandler={handlePlayButtonClick} playing={playing} />
        </Grid>
      </Grid>
    </Container>
  )
}
export default App
