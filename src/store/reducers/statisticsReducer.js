const dafaultStatisticsState = {
  timer: 4,
  timerInterval: 1000,
  score: 0,
  attempts: 0,
}

export const TIMER = 'TIMER'
export const TIMER_INTERVAL = 'TIMER_INTERVAL'
export const SCORE = 'SCORE'
export const ATTEMPTS = 'ATTEMPTS'

export const statisticsReducer = (state = dafaultStatisticsState, action) => {
  switch (action.type) {
    case TIMER:
      return { ...state, timer: action.payload }
    case TIMER_INTERVAL:
      return { ...state, timerInterval: action.payload }
    case SCORE:
      return { ...state, score: action.payload }
    case ATTEMPTS:
      return { ...state, attempts: action.payload }

    default:
      return state
  }
}

export const setTimerAction = (payload) => ({
  type: TIMER,
  payload,
})
export const setTimerIntervalAction = (payload) => ({
  type: TIMER_INTERVAL,
  payload,
})
export const setScoreAction = (payload) => ({
  type: SCORE,
  payload,
})
export const setAttemptsAction = (payload) => ({
  type: ATTEMPTS,
  payload,
})
