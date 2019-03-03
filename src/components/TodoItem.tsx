import React from 'react';

type TodoItemProps = {
  title: string;
  completed: boolean;
  onToggle?: () => void;
  onDelete?: () => void;
};

const TodoItem = (props: TodoItemProps) => {
  return (
    <div
      onClick={() => {
        props.onToggle && props.onToggle();
      }}
    >
      {props.completed ? 'DONE:' : 'TODO:'}
      {props.title}
      <button
        onClick={event => {
          event.stopPropagation();
          props.onDelete && props.onDelete();
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
