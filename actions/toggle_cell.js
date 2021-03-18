export default function toggleCell(row, column) {
  return {
    type: "TOGGLE_CELL",
    payload: {
      row: row,
      column: column,
    },
  }
}
