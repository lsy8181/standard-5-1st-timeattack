import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todo, removeTodo, toggleTodo }) {
  return (
    <div>
      {todo.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}
