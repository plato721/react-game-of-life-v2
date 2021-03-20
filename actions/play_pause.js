// If we get an intervalId passed in, we've pressed play, and store the id
//   to later destroy the setInterval that keeps the game moving if pause
//   is pressed.
const playPause = (intervalId = null) => {
  const action = { type: "PLAY_PAUSE" }
  if (intervalId) {
    action["intervalId"] = intervalId
  }
  return action
}

export default playPause
