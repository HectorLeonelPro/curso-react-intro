import { TodoProvider } from '../TodoContext';
import {AppUI} from './AppUI';
import React from 'react';

function App(){
    return (
        <React.Fragment>
            <TodoHeader />
            <TodoList />
        </React.Fragment>
    )
}

// function App() {
// 	return(
// 		<TodoProvider>
// 			<AppUI />
// 		</TodoProvider>
// 	) 
// }

export default App;
