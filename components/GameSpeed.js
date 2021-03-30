import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"

const GameSpeed = ({ selectHandler, speed }) => {
  const useStyles = makeStyles({
    root: {
      width: 600,
    },
  })

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Slider value={speed} onChange={selectHandler} />
      <Typography id="game-speed" gutterBottom>
        Game Speed
      </Typography>
    </div>
  )
}

export default GameSpeed
