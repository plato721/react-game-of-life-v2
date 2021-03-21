const createBlankBoard = (dimensions) => {
  // create a 2d array representing alive state of all cells.
  //   default to random
  const blankBoard = new Array(dimensions.height)
    .fill(true)
    .map(() =>
      new Array(dimensions.width)
        .fill(true)
        .map(() => (Math.random(1) > 0.5 ? true : false))
    )

  return {
    type: "NEW_BOARD",
    payload: blankBoard,
  }
}

export default createBlankBoard
