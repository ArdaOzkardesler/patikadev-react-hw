import { useState } from 'react';
import { nanoid } from 'nanoid'
import Input from './components/Input';
import List from './components/List';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: nanoid(),
      value: 'Task1',
      done: false,
    },
    {
      id: nanoid(),
      value: 'Task2',
      done: true,
    },
    {
      id: nanoid(),
      value: 'Task3',
      done: false,
    },
  ]);

  return (
    <>
      <section className='todoapp'>
        <Input todos={todos} addTodo={setTodos} />
        <List todos={todos} setTodos={setTodos} />
      </section>
    </>
  );
}

export default App;