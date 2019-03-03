import React, { useState } from 'react';

type AddTodoProps = {
  onAddTodo: (title: string) => void;
};

const AddTodo = (props: AddTodoProps) => {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.onAddTodo(newTodoTitle);
        setNewTodoTitle('');
      }}
    >
      <input
        value={newTodoTitle}
        onChange={event => {
          setNewTodoTitle(event.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
