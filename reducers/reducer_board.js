import _ from "lodash"
import advanceBoard from "../utility/advance_board"

function toggleCell(board, row, column) {
  board[row][column] = !board[row][column]
  return board
}

export default function Board(state = null, action) {
  switch (action.type) {
    case "NEW_BOARD": {
      return action.payload
    }
    case "TOGGLE_CELL": {
      return toggleCell(
        _.cloneDeep(state),
        action.payload.row,
        action.payload.column
      )
    }
    case "TICK": {
      return advanceBoard(_.cloneDeep(state))
    }
    default: {
      return state
    }
  }
}
