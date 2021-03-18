import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"

import App from "./App"
import reducers from "./reducers"
import "./index.css"

const initialState = {
  settings: {
    width: 50,
    height: 50,
    interval: 500,
  },
  game: {
    playing: false,
  },
}

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, initialState)}>
    <App />
  </Provider>,
  document.getElementById("root")
)
