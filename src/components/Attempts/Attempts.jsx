import './Attempts.css'

import { React } from 'react'
import { useSelector } from 'react-redux'

const Attempts = () => {
  const { attempts } = useSelector((state) => state.statistics)

  return <div className="game__component attemps">Attempts: {attempts}/3</div>
}

export default Attempts
