import { createSlice } from "@reduxjs/toolkit";

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

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    createAnecdote: {
      reducer: (state, action) => {
        //console.log('ACTION', action)
        return state.concat(action.payload);
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

        //console.log("state now", changeAnecdote);
        return state.map((anecdote) =>
          anecdote.id !== id ? anecdote : changeAnecdote
        );
      },
      prepare: (id) => {
        return { payload: { id } };
      },
    },
  },
});

export const { createAnecdote, incrementVotes} = anecdoteSlice.actions

export const selectAnecdotes = (state) => state.anecdotes

export default anecdoteSlice.reducer;
