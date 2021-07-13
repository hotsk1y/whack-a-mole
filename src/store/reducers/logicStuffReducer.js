const dafaultLogicStuffState = {
  randomCell: null,
}

export const RANDOM_CELL = 'RANDOM_CELL'

export const logicStuffReducer = (state = dafaultLogicStuffState, action) => {
  switch (action.type) {
    case RANDOM_CELL:
      return { ...state, randomCell: action.payload }

    default:
      return state
  }
}

export const setRandomCellAction = (payload) => ({
  type: RANDOM_CELL,
  payload,
})
