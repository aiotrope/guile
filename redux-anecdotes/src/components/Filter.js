import { createSearch } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

export const Filter = ({ searchAnecdote, setSearchAnecdote }) => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    event.persist()
    let keyword = event.target.value
    setSearchAnecdote(keyword)
    dispatch(createSearch(keyword))
  }
  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} value={searchAnecdote} />
    </div>
  )
}
