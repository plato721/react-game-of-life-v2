import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import CreateBlankBoard from "../actions/create_blank_board"
import toggleCell from "../actions/toggle_cell.js"
import playPause from "../actions/play_pause"
import sendTick from "../actions/send_tick"
import PlayButton from "../components/play_button"

import Cell from "../components/cell.js"
import _ from "lodash"

class Board extends Component {
  constructor(props) {
    super(props)

    this.width = this.width.bind(this)
    this.height = this.height.bind(this)
    this.aliveAt = this.aliveAt.bind(this)
    this.handleCellClick = this.handleCellClick.bind(this)
  }

  width() {
    return this.props.settings.width
  }

  height() {
    return this.props.settings.height
  }

  componentDidMount() {
    this.props.CreateBlankBoard({ width: this.width(), height: this.height() })
  }

  aliveAt(row, column) {
    return this.props.board[row][column]
  }

  renderRow(row) {
    return _.map(_.range(this.width()), (column) => {
      return (
        <Cell
          alive={this.aliveAt(row, column)}
          row={row}
          column={column}
          handleClick={this.handleCellClick}
          key={`${row},${column}`}
        />
      )
    })
  }

  renderRows() {
    if (this.props.board === null) {
      return <div>Loading...</div>
    }
    return _.map(_.range(this.height()), (row) => {
      return (
        <div className="skinnyRow" key={`row_${row}`}>
          {this.renderRow(row)}
        </div>
      )
    })
  }

  handlePlayButtonClick = () => {
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

  handleCellClick(row, column) {
    this.props.toggleCell(row, column)
  }

  render() {
    return (
      <div className="board">
        <div>{this.renderRows()}</div>
        <PlayButton
          clickHandler={this.handlePlayButtonClick}
          playing={this.props.game.playing}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    board: state.board,
    game: state.game,
    settings: state.settings,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ CreateBlankBoard, toggleCell, playPause, sendTick }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
