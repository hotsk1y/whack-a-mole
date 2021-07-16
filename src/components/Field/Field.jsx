import './Field.css'

import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { calcDelay } from '../../healper'

import { setRandomCellAction } from '../../store/reducers/logicStuffReducer'
import {
  setScoreAction,
  setTimerAction,
  setTimerIntervalAction,
  setAttemptsAction,
} from '../../store/reducers/statisticsReducer'
import {
  setIsGameOverAction,
  setIsWinAction,
} from '../../store/reducers/gameReducer'
import { setActiveIndexAction } from '../../store/reducers/fieldReducer'

import Cell from '../Cell/Cell'

const Field = () => {
  const field = Array(9).fill(null)

  const dispatch = useDispatch()

  const { randomCell } = useSelector((state) => state.logic)

  const { score, timer, attempts } = useSelector((state) => state.statistics)

  const setTimer = (payload) => {
    dispatch(setTimerAction(payload))
  }
  const setAttempts = (payload) => {
    dispatch(setAttemptsAction(payload))
  }

  const setIsWin = (payload) => {
    dispatch(setIsWinAction(payload))
  }
  const setIsGameOver = (payload) => {
    dispatch(setIsGameOverAction(payload))
  }

  const { activeIndex } = useSelector((state) => state.field)
  const setActiveIndex = (payload) => {
    dispatch(setActiveIndexAction(payload))
  }

  const changeGameSpeed = () => {
    dispatch(setTimerIntervalAction(calcDelay(score)))
  }

  const handleClick = (id) => {
    if (randomCell === id && timer > 0) {
      setActiveIndex('hit')
      setTimeout(() => {
        dispatch(setScoreAction(score + 1))
        dispatch(setRandomCellAction(null))
        setTimer(4)
      }, 40)
    } else if (randomCell !== id && timer > 0) {
      setActiveIndex('miss')
      setTimeout(() => {
        setTimer(4)
        setAttempts(attempts + 1)
      }, 40)
    }
  }

  const checkResult = () => {
    if (attempts === 3 || score >= 100) {
      setTimer(0)
      setIsGameOver(true)
      setTimer(0)
    }
    if (score === 100) {
      setIsWin(true)
    }
  }

  useEffect(() => {
    const timerRandomCellIndex = setTimeout(() => {
      const result = Math.floor(Math.random() * 9)
      dispatch(setRandomCellAction(result))
    }, 20)
    return () => {
      clearTimeout(timerRandomCellIndex)
    }
  }, [score, attempts])

  useEffect(() => {
    if (score === 100) {
      setTimer(0)
    }
    if (timer === 0 && attempts < 3 && score < 100) {
      setActiveIndex('miss')
      setTimeout(() => {
        setTimer(4)
        setAttempts(attempts + 1)
      }, 40)
    }
  }, [timer, attempts])

  useEffect(() => {
    checkResult()
    changeGameSpeed()
  }, [score, attempts])

  useEffect(() => {
    if (activeIndex) {
      const interval = setInterval(() => {
        setActiveIndex(null)
      }, 40)
      return () => clearInterval(interval)
    }
  }, [activeIndex])

  return (
    <div className="field">
      {field.map((_, id) => (
        <Cell
          key={id}
          id={id}
          handleClick={handleClick}
          activeMole={randomCell}
          activeIndex={activeIndex}
        />
      ))}
    </div>
  )
}

export default Field
