import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState("");

  // 폼 제출 시 새로운 할 일 추가
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo(todo); // 새로운 할 일 추가
      setTodo(""); // 입력 필드 초기화
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일 입력"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;
