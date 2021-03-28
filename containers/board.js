import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import createBlankBoard from "../actions/createBlankBoard"
import toggleCell from "../actions/toggleCell.js"
import DisplayBoard from "../components/DisplayBoard"

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

  render() {
    return (
      <DisplayBoard
        board={this.props.board}
        handleCellClick={this.handleCellClick}
      />
    )
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
