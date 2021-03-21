import React from "react"
import "./App.css"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import PlayButton from "./components/PlayButton"
import Board from "./containers/Board"
import playPause from "./actions/playPause"
import sendTick from "./actions/sendTick"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  handlePlayButtonClick = () => {
    if (this.props.game.playing) {
      clearInterval(this.props.game.intervalId)
      this.props.playPause()
    } else {
      const intervalId = setInterval(
        this.props.sendTick,
        this.props.settings.interval
      )
      this.props.playPause(intervalId)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>{"Conway's Game of Life"}</h2>
        </div>
        <Board />
        <PlayButton
          clickHandler={this.handlePlayButtonClick}
          playing={this.props.game.playing}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game,
    settings: state.settings
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { playPause, sendTick }, dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
