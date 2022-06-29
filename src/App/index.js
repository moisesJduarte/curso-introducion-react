import React from 'react';
import { AppUI } from './AppUI';

//const defaultTodos = [
 // { text: 'Crear unn Portafolio', completed: false},
  //{ text: 'Tomar el curso con react', completed: false},
  //{ text: 'conseguir un trabajo', completed: false}
//];

function useLocalStorage(itemName) {
  

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
   localStorage.setItem(itemName, JSON.stringify([]));
   parsedItem = [];
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [todos, setTodos] = React.useState(parsedItem);


  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem(itemName, stringifiedTodos);
    setTodos(newTodos);
  };

  
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1');

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
    });

  }

 

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI 
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodos={completeTodos}
    deleteTodos={deleteTodos}
    />
 
  );
}

export default App;
  