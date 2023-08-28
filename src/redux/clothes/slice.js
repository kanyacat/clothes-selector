import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = {
	items: [
		{
			id: '1',
			name: 'Белый жакет',
			style: 'Собеседование',
			color: 'Светлая одежда',
			weather: '15',
			img: 'https://cdn.laredoute.com/products/8/7/b/87bb9f9d3a5e80e00b6684faa43f750b.jpg?imgopt=twic&twic=v1/cover=1200x1200'
		},
		{
			id: '2',
			name: 'Мои любимые облака',
			style: 'Прогулка',
			color: 'Светлая одежда',
			weather: '10',
			img: 'https://i.pinimg.com/originals/d3/5d/45/d35d457b99b3dd61d3e72e304ed518b7.jpg'
		},
		{
			id: '3',
			name: 'Моё название',
			style: 'Свидание',
			color: 'Тёмная одежда',
			weather: '20'
		}
	]
}

export const clothesSlice = createSlice({
	name: 'clothes',
	initialState,
	reducers: {
		addItems(state, action) {
			state.items.push({
				id: nanoid(),
				...action.payload
			})
		},
		deleteItems(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload)

			if (findItem) {
				state.items = state.items.filter(item => {
					return item.id !== action.payload
				})
			}
		},
		pathItems(state, action) {
			state.items.map(obj =>
				obj.id === action.payload.id ? { ...action.payload } : obj
			)
		}
	}
})

export const { addItems, deleteItems } = clothesSlice.actions

export default clothesSlice.reducer
