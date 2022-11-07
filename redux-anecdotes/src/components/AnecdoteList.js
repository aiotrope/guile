import { useSelector, useDispatch } from "react-redux";
import {
  incrementVotes,
  selectAnecdotes,
  initializeAnecdotes,
  updateAnecdote,
} from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import { selectFilter } from "../reducers/filterReducer";
import { useEffect } from "react";

export const AnecdoteList = () => {
  const dispatch = useDispatch();

  const anecdotes = [...useSelector(selectAnecdotes)].sort((a, b) => {
    return b.votes - a.votes;
  });

  const handleClick = async (id, content, votes) => {
    dispatch(incrementVotes(id));
    dispatch(setNotification(`you voted '${content}'`));
    const targetAnecdote = anecdotes.find((e) => e.id === id);
    votes = targetAnecdote.votes + 1;
    dispatch(updateAnecdote(id, content, votes));
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
