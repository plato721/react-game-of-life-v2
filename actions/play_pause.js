export default function (intervalId = null) {
  var action = { type: "PLAY_PAUSE" }
  if (intervalId) {
    action["intervalId"] = intervalId
  }
  return action
}
