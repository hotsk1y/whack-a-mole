import './Cell.css'

import { React } from 'react'

const Cell = ({ id, handleClick, activeMole, activeIndex }) => {
  const moleActiveClass = () => {
    if (activeMole === id && activeIndex === 'hit') {
      return 'cell cell--active cell--hit'
    } else if (activeMole === id && activeIndex === 'miss') {
      return 'cell cell--active cell--miss'
    } else if (activeMole === id) {
      return 'cell cell--active'
    } else {
      return 'cell'
    }
  }

  return (
    <div className={moleActiveClass()} onClick={() => handleClick(id)}></div>
  )
}

export default Cell
