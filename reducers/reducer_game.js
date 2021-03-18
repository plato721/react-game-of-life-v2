import _ from "lodash"

export default function (state = {}, action) {
  switch (action.type) {
    case "PLAY_PAUSE": {
      return _.extend(
        { playing: !state.playing },
        { intervalId: action.intervalId }
      )
    }
    default: {
      return state
    }
  }
}
