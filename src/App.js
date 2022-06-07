import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch} from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodosItem';
import { CreateTodoButton } from './CreateTodoButton';
//import './App.css';

const todos = [
  { text: 'Crear unn Portafolio', completed: false},
  { text: 'Tomar el curso con react', completed: false},
  { text: 'conseguir un trabajo', completed: false}
];

function App() {
  return (
  <React.Fragment>

    <TodoCounter />
 
    <TodoSearch />
   

    <TodoList>
      {todos.map(todo => (
         <TodoItem 
           key={todo.text} 
           text={todo.text} 
           completed={todo.completed}
           />
      ))}
     
    </TodoList>

   <CreateTodoButton />
  </React.Fragment>
  );
}

export default App;
  