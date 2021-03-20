const createBlankBoard = (dimensions) => {
  // create a 2d array representing alive state of all cells.
  //   default to random
  return {
    type: "NEW_BOARD",
    payload: new Array(dimensions.width).map(() => {
      return new Array(dimensions.height).map(() => {
        return Math.random(1) > 0.5 ? true : false
      })
    }),
  }
}

export default createBlankBoard
