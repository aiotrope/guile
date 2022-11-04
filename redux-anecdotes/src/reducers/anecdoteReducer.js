import { combineReducers } from "@reduxjs/toolkit";
import { createAction, createReducer } from "@reduxjs/toolkit";

const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);

export const createAnecdote = createAction(
  "anecdotes/add",
  function prepare(content) {
    return {
      payload: {
        content,
        id: getId(),
        votes: 0,
      },
    };
  }
);

export const incrementVotes = createAction(
  "anecdotes/increment",
  function prepare(id) {
    return {
      payload: {
        id,
      },
    };
  }
);

const anecdotes = createReducer(initialState, (builder) => {
  builder
    .addCase(createAnecdote, (state, action) => {
      return state.concat(action.payload);
    })
    .addCase(incrementVotes, (state, action) => {
      const id = action.payload.id;
      const anecdoteToChange = state.find((a) => a.id === id);

      const changeAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };

      console.log("state now", changeAnecdote);
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changeAnecdote
      );
    });
});

const anecdotesApp = combineReducers({ anecdotes });

export default anecdotesApp;
