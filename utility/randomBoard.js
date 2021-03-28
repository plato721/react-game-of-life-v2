const randomBoard = ({ width, height, fillPercent = 0.5 }) =>
  // create a 2d array representing alive state of all cells.
  //   default to random
  new Array(height)
    .fill("anything")
    .map(() =>
      new Array(width)
        .fill("anything")
        .map(() => (Math.random(1) < fillPercent ? true : false))
    )

export default randomBoard
