import React, { useState, useEffect, useRef } from "react"
import DisplayBoard from "../components/DisplayBoard"
import randomBoard from "../utility/randomBoard"
import advanceBoard from "../utility/advanceBoard"

const Board = ({ playing, tickDuration, width, height }) => {
  const [board, setBoard] = useState(randomBoard({ height, width }))
  const tickInterval = useRef(null)

  const handleCellClick = (row, column) => {
    const toggleCell = (board, row, column) => {
      board[row][column] = !board[row][column]
      return board
    }
    setBoard((prevBoard) => {
      return toggleCell(JSON.parse(JSON.stringify(prevBoard)), row, column)
    })
  }

  const updateGameRunning = (playing) => {
    if (playing) {
      tickInterval.current = setInterval(() => {
        setBoard((prevBoard) => advanceBoard(prevBoard))
      }, tickDuration)
      return () => clearInterval(tickInterval.current)
    } else {
      clearInterval(tickInterval.current)
      tickInterval.current = null
    }
  }

  useEffect(() => {
    return updateGameRunning(playing)
  }, [playing])

  return <DisplayBoard board={board} handleCellClick={handleCellClick} />
}

export default Board
