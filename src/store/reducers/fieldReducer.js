const dafaultFieldState = {
  activeIndex: null,
}

export const ACTIVE_INDEX = 'ACTIVE_INDEX'

export const fieldReducer = (state = dafaultFieldState, action) => {
  switch (action.type) {
    case ACTIVE_INDEX:
      return { ...state, activeIndex: action.payload }

    default:
      return state
  }
}

export const setActiveIndexAction = (payload) => ({
  type: ACTIVE_INDEX,
  payload,
})
