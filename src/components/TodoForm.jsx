import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || content === "") {
      alert("제목과 내용을 입력하시오");
      return;
    }
    addTodo({
      id: Date.now(),
      title,
      content,
      isCompleted: false,
    });
    setTitle("");
    setContent("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="내용을 입력하세요"
        value={title}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">추가하기</button>
    </form>
  );
}
