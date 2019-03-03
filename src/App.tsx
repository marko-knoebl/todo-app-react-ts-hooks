import React, { useReducer } from 'react';
import './App.css';
import todoDataReducer from './reducers/todoDataReducer';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {
  const [todoData, todosDispatch] = useReducer(todoDataReducer, {
    maxId: 1,
    todos: [{ id: 1, title: 'learn React', completed: false }]
  });

  return (
    <div>
      <h1>Todo</h1>
      <TodoList
        todos={todoData.todos}
        onToggle={id => {
          todosDispatch({ type: 'TOGGLE_TODO', payload: { id: id } });
        }}
        onDelete={id => {
          todosDispatch({ type: 'DELETE_TODO', payload: { id: id } });
        }}
      />
      <AddTodo
        onAddTodo={newTodoTitle => {
          todosDispatch({ type: 'ADD_TODO', payload: { title: newTodoTitle } });
        }}
      />
    </div>
  );
};

export default App;
