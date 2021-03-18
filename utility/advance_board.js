import _ from "lodash"

function advanceBoard(oldBoard) {
  var newBoard = _.cloneDeep(oldBoard)
  var width = oldBoard.length
  var height = oldBoard[0].length

  _.each(_.range(width), (column) => {
    _.each(_.range(height), (row) => {
      newBoard[row][column] = isAlive(oldBoard, row, column)
    })
  })
  return newBoard
}

function isAlive(board, row, column) {
  var states = neighborStates(board, row, column)
  var liveCount = _.countBy(states, (state) => {
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

function neighborStates(board, row, column) {
  return _.map(neighborCoordinates(board, row, column), (coords) => {
    return board[coords[0]][coords[1]]
  })
}

function neighborCoordinates(board, row, col) {
  var dumbCoords = [
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

function onBoard(board, pair) {
  return (
    pair[0] >= 0 &&
    pair[1] >= 0 &&
    pair[0] < board.length &&
    pair[1] < board[1].length
  )
}

export default advanceBoard
