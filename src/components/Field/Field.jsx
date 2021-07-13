import './Field.css'

import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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

const Field = ({ generateRandomCellIndex }) => {
  const field = Array(9).fill(null)

  const dispatch = useDispatch()

  const { randomCell } = useSelector((state) => state.logic)
  const setRandomCell = (payload) => {
    dispatch(setRandomCellAction(payload))
  }

  const { score, timer, attempts } = useSelector((state) => state.statistics)
  const setScore = (payload) => {
    dispatch(setScoreAction(payload))
  }
  const setTimer = (payload) => {
    dispatch(setTimerAction(payload))
  }
  const setTimerInterval = (payload) => {
    dispatch(setTimerIntervalAction(payload))
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
    if (score > 0 && score < 10) {
      setTimerInterval(1000)
    } else if (score <= 10 && score < 20) {
      setTimerInterval(900)
    } else if (score <= 20 && score < 30) {
      setTimerInterval(800)
    } else if (score <= 30 && score < 40) {
      setTimerInterval(700)
    } else if (score <= 40 && score < 50) {
      setTimerInterval(600)
    } else if (score <= 50 && score < 60) {
      setTimerInterval(500)
    } else if (score <= 60 && score < 70) {
      setTimerInterval(400)
    } else if (score <= 70 && score < 80) {
      setTimerInterval(300)
    } else if (score <= 80 && score < 90) {
      setTimerInterval(200)
    } else if (score <= 90 && score < 100) {
      setTimerInterval(150)
    }
  }

  const handleClick = (id) => {
    if (randomCell === id && timer > 0) {
      setActiveIndex('hit')
      setTimeout(() => {
        setScore(score + 1)
        setRandomCell(null)
        setTimer(4)
        generateRandomCellIndex()
      }, 40)
    } else if (randomCell !== id && timer > 0) {
      setActiveIndex('miss')
      setTimeout(() => {
        setTimer(4)
        setAttempts(attempts + 1)
        generateRandomCellIndex()
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
    if (score === 100) {
      setTimer(0)
    }
    if (timer === 0 && attempts < 3 && score < 100) {
      setTimer(4)
      setAttempts(attempts + 1)
      setActiveIndex('miss')
      generateRandomCellIndex()
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
          score={score}
          setScore={setScore}
          activeIndex={activeIndex}
        />
      ))}
    </div>
  )
}

export default Field
