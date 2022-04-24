import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import "./styles.css";
import { TodoType } from "./types/todo";

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
        // console.log(todos);
      });
  };

  return (
    <div className="APP">
      <button onClick={onClickFetchData}>データの取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
