import React from 'react'
import { useLocalStorage } from '../App/useLocalStorage';

const TodoContext = React.createContext()

function TodoProvider({children}){
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
	
	const [searchValue, setSearchValue] = React.useState('');
	
	const completedTodos = todos.filter(todo => !!todo.completed).length;

	const totalTodos = todos.length;
	
	const searchedTodos = todos.filter(todo => {
		const todoText = todo.text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
		const searchText = searchValue.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
		return todoText.includes(searchText)
	});

	const completeTodo = (text) => {
		const newItem = [...todos]
		const todoIndex = newItem.findIndex((todo) => todo.text === text)
		newItem[todoIndex].completed === false ? newItem[todoIndex].completed = true : newItem[todoIndex].completed = false
		saveTodos(newItem)
	}

	const deleteTodo = (text) => {
		const newItem = [...todos]
		const todoIndex = newItem.findIndex((todo) => todo.text === text)
		newItem.splice(todoIndex,1)
		saveTodos(newItem)
	}


    return (
        <TodoContext.Provider value={{
            completedTodos, 
            totalTodos, 
            searchValue, 
            setSearchValue, 
            searchedTodos, 
            completeTodo, 
            deleteTodo, 
            loading, 
            error}}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}