import React from 'react'

function useLocalStorage(itemName, initialValue){	
	const [item, setItem] = React.useState(initialValue)
	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState(false)
	const [sincronizedItem, setSincronizedItem] = React.useState(true)
	
	React.useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageItem = localStorage.getItem(itemName)
				let parsedItem
				if(!localStorageItem){
					localStorage.setItem(itemName, JSON.stringify(initialValue))
					parsedItem = initialValue
				}
				else{
					parsedItem = JSON.parse(localStorageItem)
					setItem(parsedItem)
				}
				setLoading(false)
                setSincronizedItem(false)
			} catch (error) {
				setLoading(false)
                setSincronizedItem(false)
				setError(error)
			}	
		}, 2000);
	}, [sincronizedItem])
	
	const saveItem = (newItem) => {
		localStorage.setItem(itemName, JSON.stringify(newItem))
		setItem(newItem)
	}

    const sincronizeItem = () => {
        setLoading(true)
        setSincronizedItem(true)
    }

	return {item, saveItem, loading, error, sincronizeItem}
}

export {useLocalStorage}


// localStorage.removeItem('TODOS_V1')
// const defaultTodos = [
// 	{text: 'Terminar el curso de React.js', completed: false},
// 	{text: 'Primer junta con clientes (Gp pack)', completed: false},
// 	{text: 'Terminar los documentos de las estadías', completed: false},
// 	{text: 'Empezar con los documentos de la certificación', completed: false},
// 	{text: 'Decirle a mi princesa que marque a BBVA', completed: true},
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))



