import advanceBoard from "../utility/advanceBoard"

const board = (state = null, action) => {
  const toggleCell = (board, row, column) => {
    board[row][column] = !board[row][column]
    return board
  }
  switch (action.type) {
    case "NEW_BOARD": {
      return action.payload
    }
    case "TOGGLE_CELL": {
      return toggleCell(
        JSON.parse(JSON.stringify(state)),
        action.payload.row,
        action.payload.column
      )
    }
    case "TICK": {
      return advanceBoard(JSON.parse(JSON.stringify(state)))
    }
    default: {
      return state
    }
  }
}

export default board
