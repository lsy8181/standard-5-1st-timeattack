import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const workingTodos = todos.filter((todo) => !todo.isCompleted);
  const doneTodos = todos.filter((todo) => todo.isCompleted);

  return (
    <div>
      <h1>투두리스트 타임어택</h1>
      <TodoForm addTodo={addTodo} />
      <h2>진행중</h2>
      <TodoList
        todos={workingTodos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
      <h2>완료</h2>
      <TodoList
        todos={doneTodos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}
