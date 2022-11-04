import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1>Template REACT_QUERY TS</h1>
        <p>Welcome</p>
        <p>React Query ecosystem and devtools already setup</p>
        <p>Have fun !</p>
      </div>
      <Component />
    </>
  );
}

export default App;

const Component = () => {
  const todoStore = useQuery({ queryKey: ["todos"], queryFn: getTodos });
  const { data } = todoStore;

  return (
    <div className="component">
      <h1>My toDoList</h1>

      {data && data.map((todo: string, index: number) => <p>{todo}</p>)}
    </div>
  );
};

const getTodos = (): string[] => {
  const todos: string[] = ["Clean the desk", "Get the dog out"];
  return todos;
};
