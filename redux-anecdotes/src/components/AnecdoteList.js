import { useSelector, useDispatch } from "react-redux";
import { incrementVotes } from "../reducers/anecdoteReducer";

export const AnecdoteList = () => {
  const anecdotes = [...useSelector((state) => state.anecdotes)].sort(
    (a, b) => {
      return b.votes - a.votes;
    }
  );
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(incrementVotes(id));
  };
  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleClick(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};
