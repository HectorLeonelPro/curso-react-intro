import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton'
import React from 'react';

const defaultTodos = [
	{text: 'Terminar el curso de React.js', completed: false},
	{text: 'Primer junta con clientes (Gp pack)', completed: false},
	{text: 'Terminar los documentos de las estadías', completed: false},
	{text: 'Empezar con los documentos de la certificación', completed: false},
	{text: 'Decirle a mi princesa que marque a BBVA', completed: false},
]

function App() {
	const [todos, setTodos] = React.useState(defaultTodos);
	
	const [searchValue, setSearchValue] = React.useState('');
	
	const completedTodos = todos.filter(todo => !!todo.completed).length;

	const totalTodos = todos.length;
	
	const searchedTodos = todos.filter(todo => {
		const todoText = todo.text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
		const searchText = searchValue.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
		return todoText.includes(searchText)
	});

	const completeTodo = (text) => {
		const newTodos = [...todos]
		const todoIndex = newTodos.findIndex((todo) => todo.text == text)
		newTodos[todoIndex].completed = true
		setTodos(newTodos)
	}

	const deleteTodo = (text) => {
		const newTodos = [...todos]
		const todoIndex = newTodos.findIndex((todo) => todo.text == text)
		newTodos.splice(todoIndex,1)
		setTodos(newTodos)
	}

	return (
		<React.Fragment>

			<TodoCounter 
				completed={completedTodos} 
				total={totalTodos} 
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
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>

			<CreateTodoButton />

		</React.Fragment>
	);
}

export default App;
