export default function (intervalId = null) {
  const action = { type: "PLAY_PAUSE" }
  if (intervalId) {
    action["intervalId"] = intervalId
  }
  return action
}
