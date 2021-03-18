import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import CreateBlankBoard from "../actions/create_blank_board"
import toggleCell from "../actions/toggle_cell.js"

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

  componentWillMount() {
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

  handleCellClick(row, column) {
    this.props.toggleCell(row, column)
  }

  render() {
    return <div>{this.renderRows()}</div>
  }
}

function mapStateToProps(state) {
  return {
    board: state.board,
    settings: state.settings,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ CreateBlankBoard, toggleCell }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
