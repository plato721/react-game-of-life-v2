import React from "react"

const Cell = ({ alive, row, column, handleClick }) => {
  function cellClicked() {
    handleClick(row, column)
  }

  if (alive) {
    return <div className="cell alive" onClick={cellClicked}></div>
  } else {
    return <div className="cell dead" onClick={cellClicked}></div>
  }
}

export default Cell
