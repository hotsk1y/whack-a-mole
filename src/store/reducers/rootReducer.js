import { combineReducers } from 'redux'

import { gameReducer } from './gameReducer'
import { statisticsReducer } from './statisticsReducer'
import { logicStuffReducer } from './logicStuffReducer'
import { fieldReducer } from './fieldReducer'

export const rootReducer = combineReducers({
  game: gameReducer,
  statistics: statisticsReducer,
  logic: logicStuffReducer,
  field: fieldReducer,
})
