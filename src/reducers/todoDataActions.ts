export type Action = {
  type: string;
};

export type AddTodoAction = Action & {
  type: 'ADD_TODO';
  payload: {
    title: string;
  };
};

export type ToggleTodoAction = Action & {
  type: 'TOGGLE_TODO';
  payload: {
    id: number;
  };
};

export type DeleteTodoAction = Action & {
  type: 'DELETE_TODO';
  payload: {
    id: number;
  };
};

export type TodoAction = AddTodoAction | ToggleTodoAction | DeleteTodoAction;
