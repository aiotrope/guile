import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  _good,
  _bad,
  _ok,
  _zero,
  selectBad,
  selectGood,
  selectOk,
} from './reducer'

const App = () => {
  const dispatch = useDispatch()
  const countGood = useSelector(selectGood)
  const countOk = useSelector(selectOk)
  const countBad = useSelector(selectBad)

  const good = () => {
    dispatch(_good())
  }

  const ok = () => {
    dispatch(_ok())
  }

  const bad = () => {
    dispatch(_bad())
  }

  const zero = () => {
    dispatch(_zero())
  }

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={ok}>ok</button>
      <button onClick={bad}>bad</button>
      <button onClick={zero}>reset stats</button>
      <div>good {countGood}</div>
      <div>ok {countOk}</div>
      <div>bad {countBad}</div>
    </div>
  )
}

export default App
