const advanceBoard = (oldBoard) => {
  const aliveNeighborCount = (row, column) => {
    const onBoard = (pair) =>
      pair[0] >= 0 &&
      pair[1] >= 0 &&
      pair[0] < oldBoard.length &&
      pair[1] < oldBoard[1].length

    const neighborCoordinates = () => {
      const dumbCoords = [
        [row - 1, column - 1],
        [row - 1, column],
        [row - 1, column + 1],
        [row, column - 1],
        [row, column + 1],
        [row + 1, column - 1],
        [row + 1, column],
        [row + 1, column + 1],
      ]

      return dumbCoords.filter((coords) => onBoard(coords))
    }

    return neighborCoordinates(row, column).reduce((acc, [row, column]) => {
      return acc + (oldBoard[row][column] ? 1 : 0)
    }, 0)
  }

  const cellAliveNextRound = (row, column) => {
    const numAliveNeighbors = aliveNeighborCount(row, column)
    const cellCurrentlyAlive = oldBoard[row][column]
    return cellCurrentlyAlive
      ? numAliveNeighbors === 2 || numAliveNeighbors === 3
      : numAliveNeighbors === 3
  }

  return oldBoard.map((row, rowNumber) => {
    return row.map((_, colNumber) => {
      return cellAliveNextRound(rowNumber, colNumber)
    })
  })
}

export default advanceBoard
