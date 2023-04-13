import React from 'react'
import DiceIcon from '../assets/icon-dice.svg';

const Button = ({onClick}) => {
  return (
    <button onClick={onClick} className='button'>
      <img src={DiceIcon}/>
    </button>
  )
}

export default Button