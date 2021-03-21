import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import createBlankBoard from "../actions/createBlankBoard"
import toggleCell from "../actions/toggleCell.js"
import Cell from "../components/cell.js"

class Board extends Component {
  constructor(props) {
    super(props)
  }

  handleCellClick = (row, column) => this.props.toggleCell(row, column)

  componentDidMount() {
    this.props.createBlankBoard({
      width: this.props.width,
      height: this.props.height,
    })
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createBlankBoard, toggleCell }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
