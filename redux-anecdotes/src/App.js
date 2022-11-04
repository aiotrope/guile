import { useState } from "react";
import { AnecdoteForm } from "./components/AnecdoteForm";
import { AnecdoteList } from "./components/AnecdoteList";

const App = () => {
  const [anecdote, setAnecdote] = useState("");

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm anecdote={anecdote} setAnecdote={setAnecdote} />
      <AnecdoteList />
    </div>
  );
};

export default App;
