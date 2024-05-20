import React from "react";

export default function TodoItem({ todo, removeTodo, toggleTodo }) {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
      <button onClick={() => removeTodo(todo.id)}>삭제하기</button>
      <button onClick={() => toggleTodo(todo.id)}>
        {todo.isCompleted ? "취소" : "완료"}
      </button>
    </div>
  );
}
