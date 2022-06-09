import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch} from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodosItem';
import { CreateTodoButton } from './CreateTodoButton';
//import './App.css';

const defaultTodos = [
  { text: 'Crear unn Portafolio', completed: false},
  { text: 'Tomar el curso con react', completed: false},
  { text: 'conseguir un trabajo', completed: false}
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } 
  else {
    searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
    })

  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
  <React.Fragment>

    <TodoCounter 
      total={totalTodos}
      completed={completedTodos}
    />
 
    <TodoSearch 
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    />
   

    <TodoList>
      {searchedTodos.map(todo => (
         <TodoItem 
           key={todo.text} 
           text={todo.text} 
           completed={todo.completed}
           onComplete={() => completeTodos(todo.text)}
           onDelete={() => deleteTodos(todo.text)}
           />
      ))}
     
    </TodoList>

   <CreateTodoButton />
  </React.Fragment>
  );
}

export default App;
  