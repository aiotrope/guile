import { useSelector, useDispatch } from "react-redux";
import {
  incrementVotes,
  selectAnecdotes,
  initializeAnecdotes,
  updateAnecdote,
} from "../reducers/anecdoteReducer";
import { createMessage } from "../reducers/notificationReducer";
import { selectFilter } from "../reducers/filterReducer";
import { useEffect } from "react";

export const AnecdoteList = () => {
  const dispatch = useDispatch();

  const anecdotes = [...useSelector(selectAnecdotes)].sort((a, b) => {
    return b.votes - a.votes;
  });

  const handleClick = (id, content) => {
    dispatch(incrementVotes(id));
    dispatch(createMessage(`you voted '${content}'`));
  };

  const filterAnecdotes = useSelector(selectFilter);

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  return (
    <>
      {anecdotes
        .filter((anecdote) =>
          anecdote.content.toUpperCase().includes(filterAnecdotes.toUpperCase())
        )
        .map((elem) => (
          <div key={elem.id}>
            <div>{elem.content}</div>
            <div>
              has {elem.votes}
              <button onClick={() => handleClick(elem.id, elem.content)}>
                vote
              </button>
            </div>
          </div>
        ))}
    </>
  );
};
