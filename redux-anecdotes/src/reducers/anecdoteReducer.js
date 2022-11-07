import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

const getId = () => (100000 * Math.random()).toFixed(0);

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote: {
      reducer: (state, action) => {
        //console.log('ACTION', action)
        const content = action.payload;
        state.push(content);
      },
      prepare: (content) => {
        const id = getId();
        const votes = 0;
        return { payload: { content, id, votes } };
      },
    },
    incrementVotes: {
      reducer: (state, action) => {
        const id = action.payload.id;
        const anecdoteToChange = state.find((a) => a.id === id);

        const changeAnecdote = {
          ...anecdoteToChange,
          votes: anecdoteToChange.votes + 1,
        };
        //console.log("ACTIONS--", changeAnecdote);
        //state.concat(changeAnecdote)
        return state.map((anecdote) =>
          anecdote.id !== id ? anecdote : changeAnecdote
        );
      },
      prepare: (id) => {
        return { payload: { id } };
      },
    },
    appendAnecdote: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
    },
    setAnecdotes: {
      reducer: (state, action) => {
        return action.payload;
      },
    },
  },
});

export const { incrementVotes, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.create(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const updateAnecdote = (id, content, votes) => {
  return async () => {
    const anecdote = await anecdoteService.update(id, {
      content: content,
      id: id,
      votes: votes,
    });
    return anecdote;
    //dispatch(anecdote);
  };
};

export const selectAnecdotes = (state) => state.anecdotes;

export default anecdoteSlice.reducer;
