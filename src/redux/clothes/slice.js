import {createSlice} from "@reduxjs/toolkit";

const initialState = {
items: []
}

export const clothesSlice = createSlice({
	name: 'clothes',
	initialState,
	reducers: {
		addItems(state, action) {
			state.items.push({
					...action.payload
			})
 
		}
}})

export const {addItems} = clothesSlice.actions

export default clothesSlice.reducer