import React from 'react';
import {useTodos} from './useTodos'
import {TodoCounter} from '../TodoCounter'
import {TodoSearch} from '../TodoSearch'
import {TodoList} from '../TodoList'
import {TodoItem} from '../TodoItem';
import {TodosLoading} from '../TodosLoading';
import {TodosError} from '../TodosError';
import {EmptyTodos} from '../EmptyTodos';
import {CreateTodoButton} from '../CreateTodoButton'
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodoHeader } from '../TodoHeader';

function App(){
	const {loading, error, searchedTodos, completeTodo, deleteTodo, openModal, completedTodos, totalTodos, searchValue, setSearchValue, setOpenModal, addTodo} = useTodos()

    return (
		<>
            <TodoHeader>
                <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
                <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            </TodoHeader>

            <TodoList 
                error={error}
                loading={loading}
                searchedTodos={searchedTodos}
                totalTodos={totalTodos}
                searchText={searchValue}
                onError={() => <TodosError />}
                onLoading={() => <TodosLoading />}
                onEmptyTodos={() => <EmptyTodos />}
                onEmptySearchResults={(searchText) => `${searchText} no fue encontrado en tu lista de TODO's.</p>`}
                // render={todo => (
                //     <TodoItem 
                //         key={todo.text} 
                //         text={todo.text}
                //         completed={todo.completed}
                //         onComplete={() => completeTodo(todo.text)}
                //         onDelete={() => deleteTodo(todo.text)}
                //     />
                // )}
            >
                {todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                )}
            </TodoList>
			<CreateTodoButton setOpenModal={setOpenModal} />

            {openModal && (
                <Modal>
                    <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
                </Modal>
            )}
		</>
	);
}

export default App;
