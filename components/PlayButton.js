import React from "react"

const playButton = ({ playing, clickHandler }) => {
  const buttonClasses = playing
    ? "play-button btn btn-danger"
    : "play-button btn btn-primary"

  const buttonText = playing ? "Stop" : "Start"

  return (
    <button className={buttonClasses} onClick={clickHandler}>
      {buttonText}
    </button>
  )
}

export default playButton
