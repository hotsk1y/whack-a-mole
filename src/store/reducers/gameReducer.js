const dafaultGameState = {
  isGameStarted: false,
  isGameOver: false,
  isWin: false,
}

export const IS_GAME_STARTED = 'GAME_IS_STARTED'
export const IS_GAME_OVER = 'IS_GAME_OVER'
export const IS_WIN = 'IS_WIN'

export const gameReducer = (state = dafaultGameState, action) => {
  switch (action.type) {
    case IS_GAME_STARTED:
      return { ...state, isGameStarted: action.payload }
    case IS_GAME_OVER:
      return { ...state, isGameOver: action.payload }
    case IS_WIN:
      return { ...state, isWin: action.payload }

    default:
      return state
  }
}

export const setIsGameStartedAction = (payload) => ({
  type: IS_GAME_STARTED,
  payload,
})
export const setIsGameOverAction = (payload) => ({
  type: IS_GAME_OVER,
  payload,
})
export const setIsWinAction = (payload) => ({
  type: IS_WIN,
  payload,
})
