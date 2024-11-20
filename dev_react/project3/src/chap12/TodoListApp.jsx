import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoListApp() {
  const [todos, setTodos] = useState([]);

  // 새로운 할 일 추가 함수
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>할 일 목록</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoListApp;
