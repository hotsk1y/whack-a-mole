import './Score.css'

import { React } from 'react'

import { useSelector } from 'react-redux'

const Score = () => {
  const { score } = useSelector((state) => state.statistics)

  return <div className="game__component score">Score: {score}</div>
}

export default Score
