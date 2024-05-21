import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton'
import React from 'react';

const defaultTodos = [
	{text: 'Cortar cebolla', completed: false},
	{text: 'Cortar cebolla 2', completed: true},
	{text: 'Cortar cebolla 3', completed: false},
	{text: 'Cortar cebolla 4', completed: false},
]

function App() {
	const [todos, setTodos] = React.useState(defaultTodos);
	const [searchValue, setSearchValue] = React.useState('');
	console.log('Los usuarios buscan todos de ' + searchValue)

	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;
	const searchedTodos = todos.filter(todo => {
		return todo.text.includes(searchValue)
	});

	return (
		<React.Fragment>

			<TodoCounter completed={completedTodos} total={totalTodos} />
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
					/>
				))}
			</TodoList>

			<CreateTodoButton />

		</React.Fragment>
	);
}

export default App;
