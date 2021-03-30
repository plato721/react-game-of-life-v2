import React from "react"
import Button from "@material-ui/core/Button"
import PlayIcon from "@material-ui/icons/PlayCircleOutline"
import PauseIcon from "@material-ui/icons/PauseCircleOutline"

const playButton = ({ playing, clickHandler }) => {
  return (
    <Button
      onClick={clickHandler}
      color={playing ? "secondary" : "primary"}
      startIcon={playing ? <PauseIcon /> : <PlayIcon />}
      variant="outlined"
      size="large"
    >
      {playing ? "Pause" : "Play"}
    </Button>
  )
}

export default playButton
