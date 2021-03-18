import { combineReducers } from "redux"
import Settings from "./reducer_settings"
import Board from "./reducer_board"
import Game from "./reducer_game"

const rootReducer = combineReducers({
  settings: Settings,
  board: Board,
  game: Game,
})

export default rootReducer
