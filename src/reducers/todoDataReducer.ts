import { TodoAction } from './todoDataActions';
import { TodoType } from '../types';

type TodosState = {
  todos: Array<TodoType>;
  maxId: number;
};

const todoDataReducer = (state: TodosState, action: TodoAction): TodosState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: state.maxId + 1, title: action.payload.title, completed: false }
        ],
        maxId: state.maxId + 1
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => ({
          ...todo,
          completed:
            todo.id === action.payload.id ? !todo.completed : todo.completed
        }))
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    default:
      throw new Error('unknown action');
  }
};

export default todoDataReducer;
