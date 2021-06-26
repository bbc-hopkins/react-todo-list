import React, { useState } from 'react';

import './App.scss';
import Todo from './components/Todo';
// import TodoEdit from './components/TodoEdit';
import TodoForm from './components/TodoForm';
import TodoHeader from './components/TodoHeader';

function App() {
  const img = 'https://picsum.photos/200';
  const [todos, setTodos] = useState([]);

  const formattedTodos = () => {
    const fTodos = todos.map((todo) => {
      const container = {};
      container.title =
        todo.title.charAt(0).toUpperCase() + todo.title.slice(1);
      container.id = todo.id;
      return container;
    });
    return fTodos;
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const renderTags = () => {
    if (todos.length === 0)
      return <code className='empty-list'>Oops, there is no todos :) </code>;

    return (
      <ul className='todos-list'>
        {formattedTodos().map((todo) => (
          <li key={todo.id}>
            <Todo todo={todo} deleteTodo={deleteTodo} />
          </li>
        ))}
      </ul>
    );
  };

  const getInputValue = (childData) => {
    setTodos([...todos, childData]);
  };

  return (
    <div className='todos-wrapper'>
      <TodoHeader />
      <div className='thumbnail'>
        <img src={img} alt='img' className='image' />
      </div>
      <TodoForm emitInputValue={getInputValue} />
      {renderTags()}
      {todos.length === 0 && 'Please create new todo!'}
    </div>
  );
}

export default App;
