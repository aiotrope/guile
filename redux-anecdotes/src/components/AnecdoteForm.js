import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { createMessage } from "../reducers/notificationReducer";

export const AnecdoteForm = ({ anecdote, setAnecdote }) => {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    if (event) event.preventDefault();
    dispatch(createAnecdote(anecdote));
    dispatch(createMessage(`you added '${anecdote}' to the list`));
    setAnecdote("");
  };

  const onChange = (event) => {
    event.persist();
    setAnecdote(event.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <h3>create new</h3>
          <input value={anecdote} onChange={onChange} />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};
