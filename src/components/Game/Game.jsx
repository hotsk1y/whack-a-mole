import './Game.css'

import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Score from '../Score/Score'
import Timer from '../Timer/Timer'
import Field from '../Field/Field'
import Attempts from '../Attempts/Attempts'
import Modal from '../Modal/Modal'

import {
  setIsGameStartedAction,
  setIsWinAction,
} from '../../store/reducers/gameReducer'

import {
  setTimerAction,
  setScoreAction,
  setAttemptsAction,
} from '../../store/reducers/statisticsReducer'

const Game = () => {
  const dispatch = useDispatch()

  const { isGameStarted, isGameOver } = useSelector((state) => state.game)

  const startGame = () => {
    dispatch(setScoreAction(0))
    dispatch(setTimerAction(4))
    dispatch(setAttemptsAction(0))
    dispatch(setIsGameStartedAction(true))
    dispatch(setIsWinAction(false))
  }

  const stopGame = () => {
    dispatch(setIsGameStartedAction(false))
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
      {isGameStarted && <Field />}
      {isGameOver && <Modal startGame={startGame} />}
    </div>
  )
}

export default Game
