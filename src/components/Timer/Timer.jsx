import './Timer.css'

import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTimerAction } from '../../store/reducers/statisticsReducer'

const Timer = () => {
  const dispatch = useDispatch()

  const { timer, timerInterval } = useSelector((state) => state.statistics)
  const setTimer = (payload) => {
    dispatch(setTimerAction(payload))
  }

  useEffect(() => {
    const counter =
      timer > 0 && setInterval(() => setTimer(timer - 1), timerInterval)
    return () => clearInterval(counter)
  }, [timer, setTimer, timerInterval])

  return (
    <div className="game__component timer">
      {timer < 1 ? 'Time over' : `Time: ${timer}`}
    </div>
  )
}

export default Timer
