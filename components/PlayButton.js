import React from "react"
import Button from "@material-ui/core/Button"
import PlayIcon from "@material-ui/icons/PlayCircleOutline"
import PauseIcon from "@material-ui/icons/PauseCircleOutline"
import Grid from "@material-ui/core/grid"

const playButton = ({ playing, clickHandler }) => {
  return (
    <Grid item>
      <Button
        onClick={clickHandler}
        color={playing ? "secondary" : "primary"}
        startIcon={playing ? <PauseIcon /> : <PlayIcon />}
        variant="outlined"
        size="large"
      >
        {playing ? "Pause" : "Play"}
      </Button>
    </Grid>
  )
}

export default playButton
