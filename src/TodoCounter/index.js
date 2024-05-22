import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext'

function TodoCounter() {
	const {completedTodos, totalTodos} = React.useContext(TodoContext)
	return (

		<div>
			{(totalTodos === completedTodos && totalTodos >= 1) && 
				<h1 className='TodoCounter'>
					Has completado todos los TODO's 🥳
				</h1>
			}
			{(totalTodos !== completedTodos || totalTodos === 0) &&
				<h1 className='TodoCounter'>
					Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODO's
				</h1>
			}
		</div>
	)
} 

export {TodoCounter}