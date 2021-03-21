const toggleCell = (row, column) => {
  return {
    type: "TOGGLE_CELL",
    payload: {
      row: row,
      column: column,
    },
  }
}

export default toggleCell
