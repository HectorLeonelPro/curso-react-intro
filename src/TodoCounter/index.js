import './TodoCounter.css'

function TodoCounter({total, completed}) {
	return (

		<div>
			{total === completed && 
				<h1 className='TodoCounter'>
					Has completado todos los TODO's 🥳
				</h1>
			}
			{total !== completed && 
				<h1 className='TodoCounter'>
					Has completado <span>{completed}</span> de <span>{total}</span> TODO's
				</h1>
			}
		</div>
	)
} 

export {TodoCounter}