import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TodoEdit from './TodoEdit';

const Todo = ({ todo, deleteTodo }) => {
  const [todoTitle, setTodoTitle] = useState(todo.title);

  const emitNewTodo = (value) => {
    setTodoTitle(value);
  };

  return (
    <div className='todo-item'>
      {todoTitle}
      <span className='todo-btns'>
        <TodoEdit todo={todo} emitNewTodo={emitNewTodo} />
        <IconButton aria-label='delete' onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      </span>
    </div>
  );
};

export default Todo;
