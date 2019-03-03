import React from 'react';

import { TodoType } from '../types';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: Array<TodoType>;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoList = (props: TodoListProps) => {
  return (
    <div>
      {props.todos.map(todo => (
        <TodoItem
          title={todo.title}
          completed={todo.completed}
          onToggle={() => {
            props.onToggle(todo.id);
          }}
          onDelete={() => {
            props.onDelete(todo.id);
          }}
        />
      ))}
    </div>
  );
};

export default TodoList;
