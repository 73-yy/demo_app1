import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState<any>([]);

  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      // console.log(res);
      setTodos(res.data);
    });
  };

  return (
    <div className="APP">
      <button onClick={onClickFetchData}>データの取得</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userid} />
      ))}
    </div>
  );
}
