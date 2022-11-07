import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

export const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    if (event) event.preventDefault()
    const content = event.target._anecdote.value
    event.target._anecdote.value = ''
    dispatch(createAnecdote(content))
    dispatch(setNotification(`new anecdote '${content}'`))
  }

  return (
    <>
      <form onSubmit={addAnecdote}>
        <div>
          <h3>create new</h3>
          <input name="_anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  )
}
