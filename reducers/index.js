import { combineReducers } from "redux"
import Settings from "./reducerSettings"
import Board from "./reducerBoard"
import Game from "./reducerGame"

const rootReducer = combineReducers({
  settings: Settings,
  board: Board,
  game: Game,
})

export default rootReducer
