import { createAction, createReducer } from '@reduxjs/toolkit'

export const _good = createAction('GOOD')
export const _ok = createAction('OK')
export const _bad = createAction('BAD')
export const _zero = createAction('ZERO')

const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
}

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(_good, (state) => {
      state.good++
    })
    .addCase(_ok, (state) => {
      state.ok++
    })
    .addCase(_bad, (state) => {
      state.bad++
    })
    .addCase(_zero, () => {
      return initialState
    })
})

export const selectGood = (state) => state.good
export const selectOk = (state) => state.ok
export const selectBad = (state) => state.bad
