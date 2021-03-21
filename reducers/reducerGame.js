const game = (state = {}, action) => {
  switch (action.type) {
    case "PLAY_PAUSE": {
      return {
        playing: !state.playing,
        intervalId: action.intervalId,
      }
    }
    default: {
      return state
    }
  }
}

export default game
