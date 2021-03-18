import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Board from "./board"
import sendTick from "../actions/send_tick"
import playPause from "../actions/play_pause"
import PlayButton from "../components/play_button"

const Title = () => {
  return (
    <div className="App-header">
      <h2>{"Conway's Game of Life"}</h2>
    </div>
  )
}

class Game extends Component {
  constructor(props) {
    super(props)
    this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this)
  }

  handlePlayButtonClick() {
    if (this.props.game.playing) {
      clearInterval(this.props.game.intervalId)
      this.props.playPause()
    } else {
      var intervalId = setInterval(
        this.props.sendTick,
        this.props.settings.interval
      )
      this.props.playPause(intervalId)
    }
  }

  render() {
    return (
      <div>
        <Title />
        <div className="board">
          <Board />
          <PlayButton
            clickHandler={this.handlePlayButtonClick}
            playing={this.props.game.playing}
          />
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendTick, playPause }, dispatch)
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
    game: state.game,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
