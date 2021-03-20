import { TestScheduler } from "jest"
import advanceBoard from "../../utility/advanceBoard"

test("a blank board becomes a blank board", () => {
  const board = [
    [false, false],
    [false, false],
  ]
  const nextBoard = advanceBoard(board)

  const expected = [
    [false, false],
    [false, false],
  ]
  expect(nextBoard).toEqual(expected)
})
