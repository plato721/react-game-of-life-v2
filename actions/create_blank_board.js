import _ from "lodash"

const createBlankBoard = (dimensions) => {
  // create a 2d array representing alive state of all cells.
  //   default to true.
  return {
    type: "NEW_BOARD",
    payload: _.map(new Array(dimensions.width), () => {
      return _.map(new Array(dimensions.height), () => {
        return Math.random(1) > 0.5 ? true : false
      })
    }),
  }
}

export default createBlankBoard
