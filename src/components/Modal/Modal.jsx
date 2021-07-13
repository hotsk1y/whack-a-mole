import './Modal.css'

import { React } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setIsGameOverAction } from '../../store/reducers/gameReducer'

const Modal = ({ startGame }) => {
  const dispatch = useDispatch()

  const { score, attempts } = useSelector((state) => state.statistics)

  const { isWin } = useSelector((state) => state.game)
  const setIsGameOver = (payload) => {
    dispatch(setIsGameOverAction(payload))
  }

  const handleClick = () => {
    setIsGameOver(false)
    startGame()
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__title">{isWin ? 'You Win!' : 'Try Again!'}</div>
        <div className="win__status">
          <div className="win__status-item">
            Game difficult: {Math.round(score / 10)}
          </div>
          <div className="win__status-item">Score: {score}/100 point(s)</div>
          <div className="win__status-item">You failed: {attempts} time(s)</div>
        </div>
        <button onClick={() => handleClick()}>Start New Game</button>
      </div>
    </div>
  )
}

export default Modal
