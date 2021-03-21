import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import CreateBlankBoard from "../actions/create_blank_board"
import toggleCell from "../actions/toggle_cell.js"

import Cell from "../components/cell.js"

class Board extends Component {
  constructor(props) {
    super(props)
  }

  width = () => this.props.settings.width
  height = () => this.props.settings.height
  aliveAt = (row, column) => this.props.board[row][column]
  handleCellClick = (row, column) => this.props.toggleCell(row, column)

  componentDidMount() {
    this.props.CreateBlankBoard({ width: this.width(), height: this.height() })
  }

  renderRow(row, rowNumber) {
    return row.map((isAlive, colNumber) => {
      return (
        <Cell
          alive={isAlive}
          row={rowNumber}
          column={colNumber}
          handleClick={this.handleCellClick}
          key={`${rowNumber},${colNumber}`}
        />
      )
    })
  }

  renderRows() {
    if (this.props.board === null) {
      return <div>Loading...</div>
    }
    return this.props.board.map((row, rowNumber) => {
      return (
        <div className="skinnyRow" key={`row_${rowNumber}`}>
          {this.renderRow(row, rowNumber)}
        </div>
      )
    })
  }

  render() {
    return <div>{this.renderRows()}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
    settings: state.settings,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ CreateBlankBoard, toggleCell }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
