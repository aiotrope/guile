import deepFreeze from 'deep-freeze'
import {
  counterReducer,
  _good,
  _bad,
  _ok,
  _zero,
  selectGood,
  selectOk,
} from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0,
  }

  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      good: 0,
      ok: 0,
      bad: 0,
    })
  })

  it('should return a proper initial state when called with undefined state', () => {
    // eslint-disable-next-line no-unused-vars
    const state = {}
    const action = {
      type: 'DO_NOTHING',
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  it('should handle increment good', () => {
    const actual = counterReducer(initialState, _good())
    expect(actual.good).toEqual(1)
  })

  it('should handle increment bad', () => {
    const actual = counterReducer(initialState, _bad())
    expect(actual.bad).toEqual(1)
  })

  it('should increment ok', () => {
    const actual = counterReducer(initialState, _ok())
    expect(actual.ok).toEqual(1)
  })

  it('should clear stats', () => {
    const actual = counterReducer(initialState, _zero())
    expect(actual).toEqual(initialState)
  })

  it('handle select good', () => {
    const actual = counterReducer(initialState, _good())
    const result = selectGood(actual)
    expect(result).toEqual(1)
  })

  it('check bad actions', () => {
    const actual = _bad(4)
    expect(actual).toEqual({ payload: 4, type: 'BAD' })
  })

  it('handle select ok', () => {
    const actual = counterReducer(initialState, _ok())
    const result = selectOk(actual)
    expect(result).toEqual(1)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD',
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0,
    })
  })
})
