import React from "react"
import Cell from "./Cell"

const DisplayBoard = ({ board, handleCellClick }) => {
  const renderRow = (row, rowNumber) => {
    return row.map((isAlive, colNumber) => {
      return (
        <Cell
          alive={isAlive}
          row={rowNumber}
          column={colNumber}
          handleClick={handleCellClick}
          key={`${rowNumber},${colNumber}`}
        />
      )
    })
  }

  const renderRows = () => {
    if (board === null) {
      return <div>Loading...</div>
    }
    return board.map((row, rowNumber) => {
      return (
        <div className="skinnyRow" key={`row_${rowNumber}`}>
          {renderRow(row, rowNumber)}
        </div>
      )
    })
  }

  return <div>{renderRows()}</div>
}

export default DisplayBoard
