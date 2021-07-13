import './Game.css'

import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Score from '../Score/Score'
import Timer from '../Timer/Timer'
import Field from '../Field/Field'
import Attempts from '../Attempts/Attempts'
import Modal from '../Modal/Modal'

import { setIsGameStartedAction, setIsWinAction } from '../../store/reducers/gameReducer'

import {
  setTimerAction,
  setScoreAction,
  setAttemptsAction,
} from '../../store/reducers/statisticsReducer'

import { setRandomCellAction } from '../../store/reducers/logicStuffReducer'

const Game = () => {
  const dispatch = useDispatch()

  // Game data
  const { isGameStarted, isGameOver } = useSelector((state) => state.game)
  const setisGameStarted = (payload) => {
    dispatch(setIsGameStartedAction(payload))
  }
  const setIsWin = (payload) => {
    dispatch(setIsWinAction(payload))
  }

  // Statistics components
  const setTimer = (payload) => {
    dispatch(setTimerAction(payload))
  }
  const setScore = (payload) => {
    dispatch(setScoreAction(payload))
  }
  const setAttempts = (payload) => {
    dispatch(setAttemptsAction(payload))
  }

  // Logic stuff
  const setRandomCell = (payload) => {
    dispatch(setRandomCellAction(payload))
  }

  const generateRandomCellIndex = () => {
    const timerRandomCellIndex = setTimeout(() => {
      const result = Math.floor(Math.random() * 9)
      setRandomCell(result)
    }, 20)
    return () => clearTimeout(timerRandomCellIndex)
  }

  const startGame = () => {
    generateRandomCellIndex()
    setScore(0)
    setTimer(4)
    setAttempts(0)
    setisGameStarted(true)
    setIsWin(false)
  }

  const stopGame = () => {
    setisGameStarted(false)
  }

  return (
    <div className="game">
      <div className="game__title">
        {!isGameStarted && <h1>Whack a Mole</h1>}
        <button onClick={isGameStarted ? stopGame : startGame}>
          {isGameStarted ? 'Stop Game' : 'Start Game'}
        </button>
      </div>
      {isGameStarted && <Score />}
      {isGameStarted && <Attempts />}
      {isGameStarted && <Timer />}
      {isGameStarted && (
        <Field generateRandomCellIndex={generateRandomCellIndex} />
      )}
      {isGameOver && <Modal startGame={startGame} />}
    </div>
  )
}

export default Game
