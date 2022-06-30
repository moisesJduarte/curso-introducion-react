import React from 'react';
import { AppUI } from './AppUI';

//const defaultItem = [
 // { text: 'Crear unn Portafolio', completed: false},
  //{ text: 'Tomar el curso con react', completed: false},
  //{ text: 'conseguir un trabajo', completed: false}
//];

function useLocalStorage(itemName, initialValue) {
  

  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;


  if (!localStorageItem) {
   localStorage.setItem(itemName, JSON.stringify(initialValue));
   parsedItem = initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }



  const [item, setItem] = React.useState(parsedItem);



  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  
}

function App() {

  const [todos, saveItem] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedItem = todos.filter(todo => !!todo.completed).length;
  const totalItem = todos.length;

  let searchedItem = [];

  if (!searchValue.length >= 1) {
    searchedItem = todos;
  } 
  else {
    searchedItem = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
    });

  }

 

  const completeItem = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newItem = [...todos];
    newItem[todoIndex].completed = true;
    saveItem(newItem);
  };

  const deleteItem = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newItem = [...todos];
    newItem.splice(todoIndex, 1);
    saveItem(newItem);
  };

  return (
    <AppUI 
    totalItem={totalItem}
    completedItem={completedItem}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedItem={searchedItem}
    completeItem={completeItem}
    deleteItem={deleteItem}
    />
 
  );
}

export default App;
  