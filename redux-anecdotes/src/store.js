import { configureStore, combineReducers } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
  notifications: notificationReducer,
})

export const store = configureStore({ reducer: reducer })
