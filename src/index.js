import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div>
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

