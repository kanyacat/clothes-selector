import {configureStore} from "@reduxjs/toolkit";
import clothesReducer from './clothes/slice'

export const store = configureStore({
	reducer: {
		clothes: clothesReducer
	}
})