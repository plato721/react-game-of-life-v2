import _ from "lodash"

const advanceBoard = (oldBoard) => {
  const isAlive = (board, row, column) => {
    const states = neighborStates(board, row, column)
    let liveCount = _.countBy(states, (state) => {
      return state
    })
    liveCount = liveCount.true
    if (board[row][column]) {
      // currently alive
      if (liveCount === 2 || liveCount === 3) {
        return true
      } else {
        return false
      }
    } else {
      // currently dead
      if (liveCount === 3) {
        return true
      } else {
        return false
      }
    }
  }

  const neighborStates = (board, row, column) => {
    return _.map(neighborCoordinates(board, row, column), (coords) => {
      return board[coords[0]][coords[1]]
    })
  }

  const neighborCoordinates = (board, row, col) => {
    const dumbCoords = [
      [row - 1, col - 1],
      [row - 1, col],
      [row - 1, col + 1],
      [row, col - 1],
      [row, col + 1],
      [row + 1, col - 1],
      [row + 1, col],
      [row + 1, col + 1],
    ]
    return _.filter(dumbCoords, (pair) => {
      return onBoard(board, pair)
    })
  }

  const onBoard = (board, pair) =>
    pair[0] >= 0 &&
    pair[1] >= 0 &&
    pair[0] < board.length &&
    pair[1] < board[1].length

  const newBoard = _.cloneDeep(oldBoard)
  const width = oldBoard.length
  const height = oldBoard[0].length

  _.each(_.range(width), (column) => {
    _.each(_.range(height), (row) => {
      newBoard[row][column] = isAlive(oldBoard, row, column)
    })
  })
  return newBoard
}

export default advanceBoard
