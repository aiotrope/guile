import { useState } from "react";
import { AnecdoteForm } from "./components/AnecdoteForm";
import { AnecdoteList } from "./components/AnecdoteList";
import { Notification } from "./components/Notification";
import { Filter } from "./components/Filter";

const App = () => {
  const [searchAnecdote, setSearchAnecdote] = useState("");

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter
        searchAnecdote={searchAnecdote}
        setSearchAnecdote={setSearchAnecdote}
      />
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
