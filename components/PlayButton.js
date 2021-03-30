import React from "react"
import Button from "@material-ui/core/Button"

const playButton = ({ playing, clickHandler }) => {
  const buttonColor = playing ? "secondary" : "primary"
  const buttonText = playing ? "Stop" : "Start"

  return (
    <Button
      className="play-button"
      variant="contained"
      color={buttonColor}
      backgroundColor="primary"
      onClick={clickHandler}
    >
      {buttonText}
    </Button>
  )
}

export default playButton
